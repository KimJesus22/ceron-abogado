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
              sizes="(max-width: 768px) 100vw, 340px"
              loading="lazy"
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
            <div className="mt-6 bg-[#f0f4ff] border border-[#bfdbfe] rounded-xl px-4 py-3 flex flex-col gap-0.5">
              <p className="text-[0.75rem] font-bold tracking-[0.08em] uppercase text-accent mb-1">
                Cédula profesional
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.85rem] text-[#1e3a5f]">
                <span><span className="text-muted font-normal">No. </span><strong>15372157</strong></span>
                <span><span className="text-muted font-normal">Expedición: </span><strong>10 ene. 2026</strong></span>
              </div>
              <a
                href="/cedula-adrian-ceron.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver cédula profesional de Adrián Cerón López (PDF, abre en nueva pestaña)"
                className="inline-flex items-center gap-1 text-accent text-[0.8rem] font-semibold mt-2 hover:underline w-fit"
              >
                <span aria-hidden="true">📄</span> Ver documento PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
