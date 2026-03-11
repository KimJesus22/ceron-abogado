import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Supabase renamed "anon key" to "publishable key" in their dashboard.
// Support both env var names for compatibility.
const ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    ANON_KEY!,
    {
      cookies: {
        getAll()           { return cookieStore.getAll() },
        setAll(list)       { list.forEach(({ name, value, options }) =>
                               cookieStore.set(name, value, options)) },
      },
    }
  )
}

// Service-role client — only used in API routes, never in Client Components
export function createAdminClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  )
}
