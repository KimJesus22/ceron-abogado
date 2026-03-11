import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Adrián Cerón López — Licenciado en Derecho | Jaral del Progreso, Gto.',
  description: 'Asesoría legal comprometida, clara y accesible en Jaral del Progreso, Guanajuato. Derecho Familiar, Civil, Penal, Laboral, Preventivo e Inmobiliario. Primera consulta gratuita.',
  keywords: 'abogado Jaral del Progreso, licenciado en derecho Guanajuato, asesoría legal, divorcios, herencias',
  openGraph: {
    title: 'Adrián Cerón López — Abogado',
    description: 'Asesoría legal comprometida en Jaral del Progreso, Gto. Primera consulta gratuita.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
