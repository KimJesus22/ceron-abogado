import Link from 'next/link'
import { articles, formatDate } from '@/lib/articles'

const categoryColor: Record<string, string> = {
  'Derecho Familiar':     'bg-[#eff6ff] text-accent',
  'Derecho Laboral':      'bg-[#f0fdf4] text-[#15803d]',
  'Derecho Civil':        'bg-[#fefce8] text-[#b45309]',
  'Derecho Inmobiliario': 'bg-[#fdf4ff] text-[#9333ea]',
}

export default function Recursos() {
  // Muestra los 3 artículos más recientes
  const latest = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section id="recursos" className="py-20 px-8 bg-section-bg">
      <div className="max-w-[1000px] mx-auto">

        {/* Encabezado */}
        <span className="block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
          Recursos legales
        </span>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.5px] mb-3">
          Información legal que te puede ayudar
        </h2>
        <p className="text-muted text-[0.95rem] mb-10 max-w-[560px]">
          Artículos breves y prácticos sobre los temas legales más frecuentes en Guanajuato.
        </p>

        {/* Tarjetas */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {latest.map(article => (
            <Link
              key={article.slug}
              href={`/recursos/${article.slug}`}
              className="group flex flex-col bg-white border border-border rounded-xl p-7 transition-all hover:shadow-[0_8px_24px_rgba(26,86,219,0.08)] hover:border-[#bfdbfe] hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full ${categoryColor[article.category] ?? 'bg-[#eff6ff] text-accent'}`}>
                  {article.category}
                </span>
                <span className="text-[0.75rem] text-muted">{article.readTime} min</span>
              </div>
              <h3 className="text-[0.95rem] font-bold text-[#111] group-hover:text-accent transition-colors mb-2 flex-1">
                {article.title}
              </h3>
              <p className="text-[0.83rem] text-muted leading-relaxed mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="text-[0.75rem] text-muted">{formatDate(article.date)}</span>
                <span className="text-[0.8rem] font-semibold text-accent group-hover:underline">
                  Leer →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Ver todos */}
        <div className="mt-8 text-center">
          <Link
            href="/recursos"
            className="inline-flex items-center gap-2 border border-border text-[#111] font-semibold text-[0.9rem] px-7 py-3 rounded-lg transition-all hover:border-accent hover:text-accent hover:-translate-y-px"
          >
            Ver todos los artículos
          </Link>
        </div>

      </div>
    </section>
  )
}
