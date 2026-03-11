'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function SignOutButton() {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 text-[0.85rem] font-semibold border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
    >
      Cerrar sesión
    </button>
  )
}
