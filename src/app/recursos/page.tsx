import type { Metadata } from 'next'
import Link from 'next/link'
import { articles, formatDate } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Recursos legales | Adrián Cerón López — Abogado en Guanajuato',
  description:
    'Artículos legales sobre divorcio, despido injustificado, herencias e inmuebles en México. Información confiable redactada por el Lic. Adrián Cerón López.',
  keywords: [
    'recursos legales México',
    'artículos derecho Guanajuato',
    'divorcio en México',
    'despido injustificado liquidación',
    'herencias sucesiones México',
    'comprar inmueble Guanajuato',
    'orientación legal gratuita',
    'blog derecho México',
    'Adrián Cerón López abogado',
  ],
}

const categoryColor: Record<string, string> = {
  'Derecho Familiar':      'bg-[#eff6ff] text-accent',
  'Derecho Laboral':       'bg-[#f0fdf4] text-[#15803d]',
  'Derecho Civil':         'bg-[#fefce8] text-[#b45309]',
  'Derecho Inmobiliario':  'bg-[#fdf4ff] text-[#9333ea]',
}

export default function RecursosPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen bg-[#f9fafb]">

      {/* Header */}
      <div className="bg-white border-b border-border px-8 py-12">
        <div className="max-w-[780px] mx-auto">
          <Link
            href="/#recursos"
            className="text-[0.8rem] text-muted hover:text-accent transition-colors mb-4 inline-block"
          >
            ← Volver al inicio
          </Link>
          <span className="block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
            Recursos legales
          </span>
          <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-[-0.5px] mb-3">
            Orientación legal accesible
          </h1>
          <p className="text-muted text-[0.95rem] max-w-[520px]">
            Artículos breves sobre temas legales frecuentes en Guanajuato.
            Información clara, sin tecnicismos innecesarios.
          </p>
        </div>
      </div>

      {/* Grid de artículos */}
      <div className="max-w-[780px] mx-auto px-8 py-12">
        <div className="flex flex-col gap-6">
          {sorted.map(article => (
            <Link
              key={article.slug}
              href={`/recursos/${article.slug}`}
              className="group block bg-white border border-border rounded-xl p-7 transition-all hover:shadow-[0_8px_24px_rgba(26,86,219,0.08)] hover:border-[#bfdbfe] hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`text-[0.72rem] font-bold px-2.5 py-0.5 rounded-full ${categoryColor[article.category] ?? 'bg-[#eff6ff] text-accent'}`}>
                  {article.category}
                </span>
                <span className="text-[0.78rem] text-muted">
                  {formatDate(article.date)}
                </span>
                <span className="text-[0.78rem] text-muted">
                  · {article.readTime} min de lectura
                </span>
              </div>
              <h2 className="text-[1.05rem] font-bold text-[#111] group-hover:text-accent transition-colors mb-2">
                {article.title}
              </h2>
              <p className="text-[0.88rem] text-muted leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-block mt-4 text-[0.82rem] font-semibold text-accent group-hover:underline">
                Leer artículo →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center border-t border-border pt-10">
          <p className="text-muted text-[0.9rem] mb-4">
            ¿Tienes una situación legal concreta que no encuentras aquí?
          </p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-lg transition-all hover:bg-accent-dark hover:-translate-y-px"
          >
            Consulta tu caso
          </a>
        </div>
      </div>
    </main>
  )
}
