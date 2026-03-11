import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles, getArticleBySlug, formatDate } from '@/lib/articles'
import type { ContentBlock } from '@/lib/types'
import { waUrl } from '@/lib/whatsapp'

// ── Generación estática ───────────────────────────────────────────────────────

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} | Adrián Cerón López — Abogado`,
    description: article.excerpt,
  }
}

// ── Renderizado de bloques de contenido ──────────────────────────────────────

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="text-[1.1rem] font-bold text-[#111] mt-8 mb-3">
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p className="text-[0.93rem] text-[#333] leading-[1.8] mb-4">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul className="list-none mb-4 flex flex-col gap-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-[0.88rem] text-[#333] leading-relaxed">
              <span className="mt-[0.35rem] shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'note':
      return (
        <div className="my-6 border-l-4 border-accent bg-[#eff6ff] rounded-r-xl px-5 py-4">
          <p className="text-[0.88rem] text-accent-dark leading-relaxed font-medium">
            💡 {block.text}
          </p>
        </div>
      )
  }
}

// ── Colores de categoría ─────────────────────────────────────────────────────

const categoryColor: Record<string, string> = {
  'Derecho Familiar':     'bg-[#eff6ff] text-accent',
  'Derecho Laboral':      'bg-[#f0fdf4] text-[#16a34a]',
  'Derecho Civil':        'bg-[#fefce8] text-[#b45309]',
  'Derecho Inmobiliario': 'bg-[#fdf4ff] text-[#9333ea]',
}

// ── Página ───────────────────────────────────────────────────────────────────

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <main className="min-h-screen bg-white">

      {/* Barra superior */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-border px-8 h-[56px] flex items-center">
        <Link
          href="/recursos"
          className="text-[0.82rem] text-muted hover:text-accent transition-colors flex items-center gap-1.5"
        >
          ← Todos los recursos
        </Link>
      </div>

      {/* Contenido */}
      <div className="max-w-[680px] mx-auto px-8 py-12">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={`text-[0.72rem] font-bold px-2.5 py-0.5 rounded-full ${categoryColor[article.category] ?? 'bg-[#eff6ff] text-accent'}`}>
            {article.category}
          </span>
          <span className="text-[0.78rem] text-muted">{formatDate(article.date)}</span>
          <span className="text-[0.78rem] text-muted">· {article.readTime} min de lectura</span>
        </div>

        {/* Título */}
        <h1 className="text-[clamp(1.6rem,4vw,2.2rem)] font-extrabold tracking-[-0.5px] leading-[1.2] mb-4">
          {article.title}
        </h1>
        <p className="text-muted text-[0.95rem] leading-relaxed border-b border-border pb-8 mb-8">
          {article.excerpt}
        </p>

        {/* Cuerpo */}
        <article>
          {article.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        {/* CTA al final del artículo */}
        <div className="mt-12 bg-[#f9fafb] border border-border rounded-xl p-7 text-center">
          <p className="font-bold text-[1rem] mb-1">¿Tienes dudas sobre tu situación?</p>
          <p className="text-muted text-[0.88rem] mb-5">
            El Lic. Adrián Cerón López ofrece primera consulta gratuita.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waUrl(`Hola Adrián, leí tu artículo sobre "${article.title}" y tengo una pregunta.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-white font-semibold text-[0.9rem] px-6 py-3 rounded-lg transition-all hover:bg-[#1ebe5d] hover:-translate-y-px"
            >
              💬 Consultar por WhatsApp
            </a>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-transparent text-[#111] font-semibold text-[0.9rem] px-6 py-3 rounded-lg border border-border transition-all hover:border-accent hover:text-accent hover:-translate-y-px"
            >
              Enviar mensaje
            </Link>
          </div>
        </div>

        {/* Aviso legal */}
        <p className="mt-8 text-center text-[0.75rem] text-muted">
          Este artículo es de carácter informativo y no constituye asesoría legal.
          Para orientación específica sobre tu caso,{' '}
          <Link href="/#contacto" className="text-accent hover:underline">
            contáctanos
          </Link>.
        </p>
      </div>
    </main>
  )
}
