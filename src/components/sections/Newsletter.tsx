'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.status === 409) { setStatus('duplicate'); return }
      if (!res.ok) { setStatus('error'); return }
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-2xl p-8 mt-12">
      <span className="inline-block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-1">
        Newsletter
      </span>
      <h3 className="text-[1.05rem] font-extrabold mt-1 mb-2">
        Tips legales gratis en tu correo
      </h3>
      <p className="text-[0.85rem] text-muted mb-5">
        Suscríbete y recibe consejos prácticos sobre tus derechos. Sin spam.
      </p>

      {status === 'success' ? (
        <p className="text-[0.9rem] text-[#16a34a] font-semibold">✓ ¡Suscrito! Gracias por unirte.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="flex-1 min-w-[200px] px-4 py-2.5 border border-[#bfdbfe] rounded-lg text-[0.92rem] bg-white outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-2.5 bg-accent text-white rounded-lg font-bold text-[0.9rem] hover:bg-accent-dark transition-colors disabled:opacity-60"
          >
            {status === 'loading' ? 'Enviando…' : 'Suscribirme'}
          </button>
        </form>
      )}

      {status === 'duplicate' && (
        <p className="mt-2 text-[0.82rem] text-muted">Este correo ya está suscrito.</p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-[0.82rem] text-red-500">Ocurrió un error. Intenta de nuevo.</p>
      )}
    </div>
  )
}
