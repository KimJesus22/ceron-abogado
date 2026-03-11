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
