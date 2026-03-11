'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Credenciales incorrectas. Intenta de nuevo.')
      setLoading(false)
      return
    }
    router.push('/admin')
    router.refresh()
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-section-bg px-4">
      <div className="w-full max-w-[400px] bg-white border border-border rounded-2xl p-10">
        <h1 className="text-2xl font-extrabold mb-2">Panel Admin</h1>
        <p className="text-muted text-[0.9rem] mb-8">Adrián Cerón López — Abogado</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-[0.85rem] font-semibold mb-1.5">Correo electrónico</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg text-[0.92rem] outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[0.85rem] font-semibold mb-1.5">Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg text-[0.92rem] outline-none focus:border-accent transition-colors"
            />
          </div>

          {error && <p className="text-red-500 text-[0.85rem] mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-accent text-white rounded-lg font-bold text-[0.95rem] hover:bg-accent-dark transition-colors disabled:opacity-60"
          >
            {loading ? 'Ingresando…' : 'Ingresar'}
          </button>
        </form>
      </div>
    </main>
  )
}
