// ─────────────────────────────────────────────────────────────────────────────
// Testimonios — Para editar o agregar reseñas, modifica el array `testimonios`
// más abajo. Usa solo nombre de pila + inicial del apellido para proteger la
// privacidad del cliente (ej. "María R."). Publica únicamente con permiso
// expreso del cliente.
// ─────────────────────────────────────────────────────────────────────────────

const testimonios = [
  {
    texto:
      'Adrián me ayudó con mi divorcio de manera muy profesional y humana. Siempre estuvo disponible para mis dudas y me explicó cada paso del proceso con claridad. Gracias a él pude resolver todo sin complicaciones.',
    autor: 'María R.',
    area: 'Derecho Familiar',
  },
  {
    texto:
      'Fui despedido sin causa justificada y no sabía qué hacer. El licenciado Cerón me orientó desde el principio, logró una liquidación justa y en poco tiempo. Su atención es muy personalizada.',
    autor: 'Carlos M.',
    area: 'Derecho Laboral',
  },
  {
    texto:
      'Me apoyó en la compraventa de mi casa y revisó todo el contrato. Detectó cláusulas que me podrían haber perjudicado. Su asesoría preventiva vale mucho la pena.',
    autor: 'Ana L.',
    area: 'Derecho Inmobiliario',
  },
  {
    texto:
      'Llevó el trámite de herencia de mi madre con mucha dedicación. Fue transparente sobre los tiempos y los costos desde el inicio. Lo recomiendo ampliamente con familia y amigos.',
    autor: 'Roberto G.',
    area: 'Derecho Civil',
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 px-8 bg-white">
      <div className="max-w-[1000px] mx-auto">

        {/* Encabezado */}
        <span className="block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
          Clientes
        </span>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.5px] mb-3">
          Lo que dicen quienes me han contratado
        </h2>
        <p className="text-muted text-[0.95rem] mb-10 max-w-[560px]">
          Reseñas publicadas con permiso expreso de cada cliente.
        </p>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
          {testimonios.map(({ texto, autor, area }) => (
            <article
              key={autor}
              className="
                flex flex-col gap-4 p-7 rounded-xl border border-border bg-[#f9fafb]
                transition-all duration-200
                hover:shadow-[0_8px_24px_rgba(26,86,219,0.08)]
                hover:border-[#bfdbfe]
                hover:-translate-y-0.5
              "
            >
              {/* Estrellas */}
              <div aria-label="5 estrellas" className="flex gap-0.5 text-[#f59e0b] text-[1.1rem]">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} aria-hidden="true">{s}</span>
                ))}
              </div>

              {/* Comilla decorativa + texto */}
              <blockquote className="flex-1">
                <span aria-hidden="true" className="block text-[2.5rem] leading-none text-[#bfdbfe] font-serif -mb-3">&ldquo;</span>
                <p className="text-[0.88rem] text-muted leading-relaxed">{texto}</p>
              </blockquote>

              {/* Autor */}
              <footer className="border-t border-border pt-4">
                <p className="text-[0.88rem] font-semibold text-[#111]">{autor}</p>
                <p className="text-[0.78rem] text-accent font-medium">{area}</p>
              </footer>
            </article>
          ))}
        </div>

        {/* Nota legal */}
        <p className="mt-10 text-center text-[0.78rem] text-muted">
          Todas las reseñas son de clientes reales y se publican con su autorización expresa.
          Los nombres han sido abreviados para proteger su privacidad.
        </p>

      </div>
    </section>
  )
}
