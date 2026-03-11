import Image from 'next/image'

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-8 bg-section-bg">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
          Sobre mí
        </span>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.5px] mb-4">
          Comprometido con tu caso
        </h2>
        <p className="text-muted max-w-[560px] text-base mb-0">
          Formación sólida y enfoque humano en cada consulta.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
          {/* Foto */}
          <div className="w-full max-w-[340px] rounded-2xl overflow-hidden mx-auto shadow-[0_8px_32px_rgba(26,86,219,0.12)]">
            <Image
              src="/profile.jpg"
              alt="Adrián Cerón López — Abogado"
              width={340}
              height={400}
              className="w-full h-full object-cover block"
              priority
            />
          </div>

          {/* Texto */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Adrián Cerón López</h3>
            <p className="text-muted mb-4">
              Licenciado en Derecho egresado con vocación de servicio y compromiso
              con la justicia. Mi práctica se orienta a ofrecer soluciones legales
              claras, honestas y efectivas, sin importar la complejidad de tu situación.
            </p>
            <p className="text-muted mb-4">
              Cada caso es único. Por eso dedico tiempo a entender tu situación antes de
              actuar, y te mantengo informado en cada paso del proceso.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Lic. en Derecho', '📍 Jaral del Progreso, Gto.', 'Atención personalizada', 'Primera consulta', 'Confidencialidad'].map(chip => (
                <span
                  key={chip}
                  className="bg-[#eff6ff] text-accent text-[0.8rem] font-semibold px-3 py-1 rounded-full border border-[#bfdbfe]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <a
              href="/cedula-adrian-ceron.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver cédula profesional de Adrián Cerón López (PDF, abre en nueva pestaña)"
              className="inline-flex items-center gap-2 bg-[#f0f4ff] text-accent text-[0.85rem] font-semibold px-4 py-2 rounded-lg border border-[#bfdbfe] mt-4 transition-colors hover:bg-[#dbeafe]"
            >
              📄 Ver cédula profesional
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
