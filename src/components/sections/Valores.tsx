const valores = [
  { num: '01', title: 'Atención personalizada', desc: 'Cada cliente recibe atención directa. Escucho tu caso con detenimiento antes de proponer cualquier solución.' },
  { num: '02', title: 'Transparencia total', desc: 'Te explico el proceso, los tiempos y los costos de forma clara. Sin letras pequeñas ni sorpresas.' },
  { num: '03', title: 'Comunicación constante', desc: 'Te mantengo informado en cada etapa. Puedes contactarme por WhatsApp cuando lo necesites.' },
  { num: '04', title: 'Ética profesional', desc: 'Actúo siempre dentro del marco legal y con plena confidencialidad sobre tu información.' },
]

export default function Valores() {
  return (
    <section id="valores" className="py-20 px-8 bg-section-bg">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
          ¿Por qué elegirme?
        </span>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.5px] mb-4">
          Compromiso con cada cliente
        </h2>
        <p className="text-muted max-w-[560px] text-base">
          Mi práctica se basa en cuatro principios que guían cada caso.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-8 mt-12">
          {valores.map(({ num, title, desc }) => (
            <div key={num} className="flex gap-4">
              <div className="text-[2rem] font-black text-[#dbeafe] leading-none flex-shrink-0 w-10">{num}</div>
              <div>
                <h4 className="text-[0.95rem] font-bold mb-1">{title}</h4>
                <p className="text-[0.85rem] text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
