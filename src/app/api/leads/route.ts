import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
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

  return NextResponse.json({ ok: true }, { status: 201 })
}
