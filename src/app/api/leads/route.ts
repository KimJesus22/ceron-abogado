import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('[leads] Faltan variables de entorno de Supabase (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)')
    return NextResponse.json({ error: 'Servicio no configurado' }, { status: 503 })
  }

  let body: unknown
  try { body = await req.json() } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, phone, subject, message } = body as Record<string, string>

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return NextResponse.json({ error: 'El nombre es requerido' }, { status: 400 })
  }

  const supabase = createAdminClient()
  const { error } = await supabase.from('leads').insert({
    name:    name.trim(),
    phone:   phone?.trim()   || null,
    subject: subject?.trim() || null,
    message: message?.trim() || null,
  })

  if (error) {
    console.error('[leads]', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }

  // Notificación por correo (opcional — solo si RESEND_API_KEY está configurado)
  if (process.env.RESEND_API_KEY) {
    const to = process.env.CONTACT_EMAIL ?? 'ceronadrian770@gmail.com'
    const html = `
      <h2>Nuevo contacto desde el sitio web</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px">
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Nombre</td><td style="padding:8px">${name.trim()}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Teléfono</td><td style="padding:8px">${phone?.trim() || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Área</td><td style="padding:8px">${subject?.trim() || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Mensaje</td><td style="padding:8px">${message?.trim() || '—'}</td></tr>
      </table>
    `
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Cerón Abogado <onboarding@resend.dev>',
        to:   [to],
        subject: `Nuevo contacto: ${name.trim()}`,
        html,
      }),
    }).catch(err => console.error('[leads:email]', err))
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
