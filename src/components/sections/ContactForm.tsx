'use client'

import { useState } from 'react'
import { waUrl } from '@/lib/whatsapp'

const areas = ['', 'Derecho Familiar', 'Derecho Civil', 'Derecho Penal', 'Derecho Laboral', 'Asesoría Preventiva', 'Derecho Inmobiliario', 'Otro']

type Mode   = 'whatsapp' | 'email'
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [mode,     setMode]     = useState<Mode>('whatsapp')
  const [status,   setStatus]   = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function switchMode(next: Mode) {
    setMode(next)
    setStatus('idle')
    setErrorMsg('')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form     = e.currentTarget
    const nombre   = (form.elements.namedItem('nombre')   as HTMLInputElement).value.trim()
    const telefono = (form.elements.namedItem('telefono') as HTMLInputElement).value.trim()
    const asunto   = (form.elements.namedItem('asunto')   as HTMLSelectElement).value
    const mensaje  = (form.elements.namedItem('mensaje')  as HTMLTextAreaElement).value.trim()

    setStatus('loading')
    setErrorMsg('')

    if (mode === 'whatsapp') {
      // Guardar lead (best-effort, no bloquea)
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nombre, phone: telefono, subject: asunto, message: mensaje }),
      }).catch(() => {})

      let text = `Hola Adrián, me llamo *${nombre || 'un visitante'}* y necesito asesoría legal.`
      if (asunto)   text += `\n*Área:* ${asunto}`
      if (telefono) text += `\n*Teléfono:* ${telefono}`
      if (mensaje)  text += `\n*Detalle:* ${mensaje}`
      window.open(waUrl(text), '_blank', 'noopener,noreferrer')

      setStatus('success')
      form.reset()
      return
    }

    // Modo email: espera respuesta y muestra feedback en página
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nombre, phone: telefono, subject: asunto, message: mensaje }),
      })

      if (!res.ok) {
        const data: { error?: string } = await res.json().catch(() => ({}))
        setErrorMsg(data.error ?? 'No se pudo enviar el mensaje. Intenta de nuevo.')
        setStatus('error')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setErrorMsg('Sin conexión. Revisa tu internet e intenta de nuevo.')
      setStatus('error')
    }
  }

  const inputClass = 'w-full px-4 py-2.5 border border-border rounded-lg font-[inherit] text-[0.92rem] bg-white text-[#111] outline-none transition-colors focus:border-accent'

  return (
    <div>
      {/* Toggle de modo */}
      <div className="flex rounded-lg border border-border overflow-hidden mb-6" role="group" aria-label="Método de contacto">
        <button
          type="button"
          onClick={() => switchMode('whatsapp')}
          aria-pressed={mode === 'whatsapp'}
          className={`flex-1 py-2.5 text-[0.88rem] font-semibold transition-colors ${
            mode === 'whatsapp' ? 'bg-accent text-white' : 'bg-white text-muted hover:bg-section-bg'
          }`}
        >
          💬 WhatsApp
        </button>
        <button
          type="button"
          onClick={() => switchMode('email')}
          aria-pressed={mode === 'email'}
          className={`flex-1 py-2.5 text-[0.88rem] font-semibold transition-colors ${
            mode === 'email' ? 'bg-accent text-white' : 'bg-white text-muted hover:bg-section-bg'
          }`}
        >
          ✉️ Mensaje directo
        </button>
      </div>

      {mode === 'email' && (
        <p className="text-[0.82rem] text-muted mb-5 -mt-2">
          Tu mensaje quedará guardado y Adrián te contactará en las próximas horas.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-5">
          <label htmlFor="cf-nombre" className="block text-[0.85rem] font-semibold mb-1.5">
            Nombre <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="cf-nombre"
            name="nombre"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="cf-telefono" className="block text-[0.85rem] font-semibold mb-1.5">
            Teléfono <span className="text-muted font-normal">(opcional)</span>
          </label>
          <input
            id="cf-telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="10 dígitos"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="cf-asunto" className="block text-[0.85rem] font-semibold mb-1.5">
            Área legal
          </label>
          <select id="cf-asunto" name="asunto" className={inputClass}>
            {areas.map(a => (
              <option key={a} value={a}>{a || '— Selecciona un área —'}</option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="cf-mensaje" className="block text-[0.85rem] font-semibold mb-1.5">
            Cuéntame tu caso
          </label>
          <textarea
            id="cf-mensaje"
            name="mensaje"
            rows={4}
            className={`${inputClass} resize-y min-h-[100px]`}
            placeholder="Describe brevemente tu situación..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3.5 bg-accent text-white border-none rounded-lg font-[inherit] text-[0.95rem] font-bold cursor-pointer transition-colors hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading'
            ? 'Enviando…'
            : mode === 'whatsapp'
              ? '💬 Enviar por WhatsApp'
              : '✉️ Enviar mensaje'}
        </button>

        {/* Feedback WhatsApp */}
        {status === 'success' && mode === 'whatsapp' && (
          <p role="status" className="mt-3 text-[0.85rem] text-[#16a34a] text-center">
            ✅ Se abrió WhatsApp con tu mensaje. Tu consulta también quedó registrada.
          </p>
        )}

        {/* Feedback email */}
        {status === 'success' && mode === 'email' && (
          <p role="status" className="mt-3 text-[0.85rem] text-[#16a34a] text-center">
            ✅ Mensaje recibido. Adrián te contactará en las próximas horas.
          </p>
        )}

        {/* Error */}
        {status === 'error' && (
          <p role="alert" className="mt-3 text-[0.85rem] text-red-600 text-center">
            ❌ {errorMsg}
          </p>
        )}
      </form>
    </div>
  )
}
