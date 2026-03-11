const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '524561266998'

const tips = [
  { n: '1', title: 'Publica tips legales breves', desc: '¿Sabes cuáles son tus derechos si te despiden sin causa? Publica respuestas a preguntas frecuentes en tu comunidad. La gente comparte lo que le es útil.' },
  { n: '2', title: 'Muestra tu cédula y credenciales', desc: 'Publica una foto con tu título o cédula. La gente de Jaral y municipios cercanos confiará más en alguien que puede verificar su formación.' },
  { n: '3', title: 'Comparte casos de éxito (sin datos)', desc: '"Ayudé a una familia de Valle de Santiago a recuperar su propiedad en 3 meses." Sin nombres, pero concreto. Genera confianza y curiosidad.' },
  { n: '4', title: 'Pide a clientes satisfechos que te recomienden', desc: 'Un comentario o una recomendación en Facebook de alguien del municipio vale más que cualquier anuncio. Pídelo amablemente al cerrar cada caso.' },
  { n: '5', title: 'Responde comentarios y mensajes rápido', desc: 'La rapidez es tu ventaja frente a despachos grandes. Un potencial cliente que recibe respuesta en minutos tiene muchas más posibilidades de contratarte.' },
]

export default function Redes() {
  return (
    <section id="redes" className="py-20 px-8 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
          Redes sociales
        </span>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.5px] mb-4">
          Sígueme y comparte
        </h2>
        <p className="text-muted max-w-[560px] text-base">
          Encuentra asesoría legal en tus redes favoritas y ayúdame a llegar a más personas.
        </p>

        {/* Botones */}
        <div className="flex flex-wrap gap-4 mt-10 mb-12">
          <a
            className="inline-flex items-center gap-2.5 text-white font-bold text-[0.93rem] px-6 py-3 rounded-lg bg-[#1877f2] transition-all hover:opacity-90 hover:-translate-y-px"
            href="https://www.facebook.com/adrian.ceron.7509"
            target="_blank"
            rel="noopener"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            Facebook
          </a>
          <a
            className="inline-flex items-center gap-2.5 text-white font-bold text-[0.93rem] px-6 py-3 rounded-lg bg-[#25d366] transition-all hover:opacity-90 hover:-translate-y-px"
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a
            className="inline-flex items-center gap-2.5 text-white font-bold text-[0.93rem] px-6 py-3 rounded-lg bg-[#ea4335] transition-all hover:opacity-90 hover:-translate-y-px"
            href="mailto:ceronadrian770@gmail.com"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.908 1.528-1.147C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
            Correo electrónico
          </a>
        </div>

        {/* Guía de contenido */}
        <div className="bg-section-bg border border-border rounded-2xl p-10">
          <div className="mb-8">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-1">
              Guía de contenido
            </span>
            <h3 className="text-[1.2rem] font-extrabold mt-1">
              Cómo conseguir tus primeros clientes en redes
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            {tips.map(({ n, title, desc }) => (
              <div key={n} className="flex gap-5 items-start">
                <div className="text-[1.4rem] font-black text-[#bfdbfe] leading-none flex-shrink-0 w-8">{n}</div>
                <div>
                  <strong className="block text-[0.95rem] mb-1">{title}</strong>
                  <p className="text-[0.85rem] text-muted m-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
