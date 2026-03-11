import { redirect } from 'next/navigation'
import { createClient, createAdminClient } from '@/lib/supabase/server'
import type { Lead, NewsletterSubscriber } from '@/lib/types'
import SignOutButton from './SignOutButton'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const admin = createAdminClient()

  const [{ data: leads }, { data: subs }] = await Promise.all([
    admin.from('leads').select('*').order('created_at', { ascending: false }),
    admin.from('newsletter_subscribers').select('*').order('created_at', { ascending: false }),
  ])

  function fmt(d: string) {
    return new Date(d).toLocaleString('es-MX', { dateStyle: 'short', timeStyle: 'short' })
  }

  return (
    <main className="min-h-screen bg-section-bg">
      {/* Header */}
      <header className="bg-white border-b border-border px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold">Panel Admin</h1>
          <p className="text-[0.82rem] text-muted">{user.email}</p>
        </div>
        <SignOutButton />
      </header>

      <div className="max-w-[1100px] mx-auto px-8 py-10 space-y-12">

        {/* LEADS */}
        <section>
          <h2 className="text-lg font-bold mb-1">Leads del formulario de contacto</h2>
          <p className="text-[0.85rem] text-muted mb-5">{leads?.length ?? 0} contactos recibidos</p>

          {!leads?.length ? (
            <p className="text-muted text-[0.9rem]">Sin leads aún.</p>
          ) : (
            <div className="overflow-x-auto bg-white border border-border rounded-xl">
              <table className="w-full text-[0.88rem]">
                <thead>
                  <tr className="border-b border-border text-left">
                    {['Fecha', 'Nombre', 'Teléfono', 'Área', 'Mensaje'].map(h => (
                      <th key={h} className="px-4 py-3 font-semibold text-muted">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(leads as Lead[]).map(l => (
                    <tr key={l.id} className="border-b border-border last:border-0 hover:bg-section-bg transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap text-muted">{fmt(l.created_at)}</td>
                      <td className="px-4 py-3 font-medium">{l.name}</td>
                      <td className="px-4 py-3 text-muted">{l.phone ?? '—'}</td>
                      <td className="px-4 py-3 text-muted">{l.subject ?? '—'}</td>
                      <td className="px-4 py-3 text-muted max-w-[300px] truncate">{l.message ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* NEWSLETTER */}
        <section>
          <h2 className="text-lg font-bold mb-1">Suscriptores newsletter</h2>
          <p className="text-[0.85rem] text-muted mb-5">{subs?.length ?? 0} suscriptores</p>

          {!subs?.length ? (
            <p className="text-muted text-[0.9rem]">Sin suscriptores aún.</p>
          ) : (
            <div className="overflow-x-auto bg-white border border-border rounded-xl">
              <table className="w-full text-[0.88rem]">
                <thead>
                  <tr className="border-b border-border text-left">
                    {['Fecha', 'Email', 'Confirmado'].map(h => (
                      <th key={h} className="px-4 py-3 font-semibold text-muted">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(subs as NewsletterSubscriber[]).map(s => (
                    <tr key={s.id} className="border-b border-border last:border-0 hover:bg-section-bg transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap text-muted">{fmt(s.created_at)}</td>
                      <td className="px-4 py-3 font-medium">{s.email}</td>
                      <td className="px-4 py-3">{s.confirmed ? '✓' : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

      </div>
    </main>
  )
}
