'use client'

import { useState } from 'react'

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '524561266998'

const areas = ['', 'Derecho Familiar', 'Derecho Civil', 'Derecho Penal', 'Derecho Laboral', 'Asesoría Preventiva', 'Derecho Inmobiliario', 'Otro']

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const nombre  = (form.elements.namedItem('nombre')   as HTMLInputElement).value.trim()
    const telefono = (form.elements.namedItem('telefono') as HTMLInputElement).value.trim()
    const asunto  = (form.elements.namedItem('asunto')   as HTMLSelectElement).value
    const mensaje = (form.elements.namedItem('mensaje')  as HTMLTextAreaElement).value.trim()

    setStatus('loading')

    // Save lead to Supabase (best-effort — don't block WhatsApp)
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nombre, phone: telefono, subject: asunto, message: mensaje }),
    }).catch(() => {})

    // Always open WhatsApp
    let text = `Hola Adrián, me llamo *${nombre || 'un visitante'}* y necesito asesoría legal.`
    if (asunto)  text += `\n*Área:* ${asunto}`
    if (telefono) text += `\n*Teléfono:* ${telefono}`
    if (mensaje)  text += `\n*Detalle:* ${mensaje}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')

    setStatus('success')
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label className="block text-[0.85rem] font-semibold mb-1.5">Nombre</label>
        <input
          name="nombre"
          required
          className="w-full px-4 py-2.5 border border-border rounded-lg font-[inherit] text-[0.92rem] bg-white text-[#111] outline-none transition-colors focus:border-accent"
          placeholder="Tu nombre completo"
        />
      </div>
      <div className="mb-5">
        <label className="block text-[0.85rem] font-semibold mb-1.5">Teléfono (opcional)</label>
        <input
          name="telefono"
          type="tel"
          className="w-full px-4 py-2.5 border border-border rounded-lg font-[inherit] text-[0.92rem] bg-white text-[#111] outline-none transition-colors focus:border-accent"
          placeholder="10 dígitos"
        />
      </div>
      <div className="mb-5">
        <label className="block text-[0.85rem] font-semibold mb-1.5">Área legal</label>
        <select
          name="asunto"
          className="w-full px-4 py-2.5 border border-border rounded-lg font-[inherit] text-[0.92rem] bg-white text-[#111] outline-none transition-colors focus:border-accent"
        >
          {areas.map(a => <option key={a} value={a}>{a || '— Selecciona un área —'}</option>)}
        </select>
      </div>
      <div className="mb-5">
        <label className="block text-[0.85rem] font-semibold mb-1.5">Cuéntame tu caso</label>
        <textarea
          name="mensaje"
          rows={4}
          className="w-full px-4 py-2.5 border border-border rounded-lg font-[inherit] text-[0.92rem] bg-white text-[#111] outline-none transition-colors focus:border-accent resize-y min-h-[100px]"
          placeholder="Describe brevemente tu situación..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 bg-accent text-white border-none rounded-lg font-[inherit] text-[0.95rem] font-bold cursor-pointer transition-colors hover:bg-accent-dark disabled:opacity-60"
      >
        {status === 'loading' ? 'Enviando…' : '💬 Enviar por WhatsApp'}
      </button>

      {status === 'success' && (
        <p className="mt-3 text-[0.85rem] text-[#16a34a] text-center">
          ¡Listo! Se abrió WhatsApp con tu mensaje.
        </p>
      )}
    </form>
  )
}
