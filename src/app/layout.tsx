import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/JsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Adrián Cerón López — Licenciado en Derecho | Jaral del Progreso, Gto.',
  description: 'Asesoría legal comprometida, clara y accesible en Jaral del Progreso, Guanajuato. Derecho Familiar, Civil, Penal, Laboral, Preventivo e Inmobiliario. Primera consulta gratuita.',
  keywords: [
    'abogado Jaral del Progreso',
    'licenciado en derecho Guanajuato',
    'abogado Guanajuato',
    'abogado Valle de Santiago',
    'abogado Yuriria',
    'abogado Salvatierra',
    'abogado Moroleón',
    'abogado Uriangato',
    'abogado Salamanca',
    'primera consulta gratuita',
    'asesoría legal gratuita',
    'derecho familiar Guanajuato',
    'derecho laboral Guanajuato',
    'derecho civil Guanajuato',
    'derecho penal Guanajuato',
    'divorcio abogado Guanajuato',
    'custodia menores',
    'pensión alimenticia',
    'despido injustificado',
    'liquidación laboral',
    'herencias y sucesiones',
    'compraventa inmuebles Guanajuato',
    'consulta legal',
  ],
  openGraph: {
    title: 'Adrián Cerón López — Abogado en Jaral del Progreso, Gto.',
    description: 'Asesoría legal comprometida en Jaral del Progreso, Guanajuato. Derecho Familiar, Civil, Penal, Laboral e Inmobiliario. Primera consulta gratuita.',
    type: 'website',
    url: siteUrl,
    siteName: 'Adrián Cerón López — Abogado',
    locale: 'es_MX',
    images: [{ url: '/profile.jpg', width: 340, height: 400, alt: 'Adrián Cerón López — Licenciado en Derecho' }],
  },
  twitter: {
    card: 'summary',
    title: 'Adrián Cerón López — Abogado en Guanajuato',
    description: 'Asesoría legal en Jaral del Progreso, Gto. Primera consulta gratuita.',
    images: ['/profile.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
