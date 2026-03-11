export interface Lead {
  id: string
  created_at: string
  name: string
  phone: string | null
  subject: string | null
  message: string | null
}

export interface NewsletterSubscriber {
  id: string
  created_at: string
  email: string
  confirmed: boolean
}

// ── Recursos legales (blog estático) ──────────────────────────────────────────

export type ContentBlock =
  | { type: 'p';    text: string }
  | { type: 'h2';   text: string }
  | { type: 'ul';   items: string[] }
  | { type: 'note'; text: string }

export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string        // ISO 8601, ej. "2025-11-10"
  category: string
  readTime: number    // minutos estimados
  content: ContentBlock[]
}
