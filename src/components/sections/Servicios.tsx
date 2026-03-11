const servicios = [
  { icon: '👨‍👩‍👧', title: 'Derecho Familiar', desc: 'Divorcios, custodia de menores, pensión alimenticia, adopción y violencia familiar.' },
  { icon: '⚖️', title: 'Derecho Civil', desc: 'Herencias, sucesiones, contratos, responsabilidad civil y demandas civiles.' },
  { icon: '🔒', title: 'Derecho Penal', desc: 'Defensa penal, asesoría a víctimas, delitos del fuero común y amparo.' },
  { icon: '💼', title: 'Derecho Laboral', desc: 'Despidos injustificados, liquidaciones, demandas ante el ILTAC y IMSS.' },
  { icon: '📋', title: 'Asesoría Preventiva', desc: 'Revisión de contratos, consultoría empresarial y prevención de litigios.' },
  { icon: '🏠', title: 'Derecho Inmobiliario', desc: 'Compraventa de inmuebles, arrendamientos, regularización de propiedades y escrituración.' },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 px-8 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
          Servicios
        </span>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.5px] mb-4">
          Áreas de práctica
        </h2>
        <p className="text-muted max-w-[560px] text-base">
          Soluciones legales integrales para personas y familias de Jaral del Progreso y la región.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 mt-12">
          {servicios.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="border border-border rounded-xl p-7 transition-all hover:shadow-[0_8px_24px_rgba(26,86,219,0.1)] hover:border-[#bfdbfe] hover:-translate-y-0.5"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-base font-bold mb-2">{title}</h3>
              <p className="text-[0.88rem] text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
