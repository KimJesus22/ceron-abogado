const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '524561266998'

const tarifas = [
  { nombre: 'Primera consulta', precio: 'Gratuita', desc: 'Platicamos tu situación sin costo ni compromiso.', destacada: true },
  { nombre: 'Orientación legal', precio: '$300 – $600', desc: 'Asesoría puntual sobre dudas o documentos.' },
  { nombre: 'Contratos y documentos', precio: '$1,500 – $4,000', desc: 'Elaboración o revisión de contratos y escritos legales.' },
  { nombre: 'Trámites y gestiones', precio: '$1,000 – $3,000', desc: 'Actas, poderes notariales, trámites ante dependencias.' },
  { nombre: 'Derecho Familiar', precio: 'Desde $5,000', desc: 'Divorcios, custodia, pensión alimenticia, adopción.' },
  { nombre: 'Derecho Civil', precio: 'Desde $4,000', desc: 'Herencias, sucesiones, demandas civiles.' },
  { nombre: 'Derecho Laboral', precio: 'Desde $5,000', desc: 'Despidos, liquidaciones, demandas ante el ILTAC.' },
  { nombre: 'Derecho Penal', precio: 'Desde $8,000', desc: 'Defensa en procesos penales, asesoría a víctimas.' },
]

export default function Tarifas() {
  return (
    <section id="tarifas" className="py-20 px-8 bg-section-bg">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
          Tarifas
        </span>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.5px] mb-4">
          Precios orientativos
        </h2>
        <p className="text-muted max-w-[560px] text-base">
          Los honorarios varían según la complejidad del caso. Primera consulta siempre gratuita.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 mt-12">
          {tarifas.map(({ nombre, precio, desc, destacada }) => (
            <div
              key={nombre}
              className={`border rounded-xl p-6 transition-all hover:shadow-[0_6px_20px_rgba(26,86,219,0.1)] hover:border-[#bfdbfe] hover:-translate-y-0.5 ${
                destacada
                  ? 'border-accent bg-[#eff6ff]'
                  : 'border-border bg-white'
              }`}
            >
              <div className="text-[0.8rem] font-bold uppercase tracking-[0.06em] text-muted mb-2">{nombre}</div>
              <div className={`text-2xl font-extrabold mb-1.5 ${destacada ? 'text-accent-dark' : 'text-accent'}`}>
                {precio}
              </div>
              <div className="text-[0.83rem] text-muted">{desc}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[0.8rem] text-muted border-l-[3px] border-border pl-4">
          * Precios en pesos mexicanos (MXN). El costo final depende del tipo de caso, su complejidad y las gestiones requeridas. Solicita una cotización personalizada sin compromiso.
        </p>
        <div className="text-center mt-6">
          <a
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-lg transition-all hover:bg-accent-dark hover:-translate-y-px"
            href={`https://wa.me/${WA_NUMBER}?text=Hola%20Adri%C3%A1n%2C%20quisiera%20una%20cotizaci%C3%B3n%20para%20mi%20caso.`}
            target="_blank"
            rel="noopener"
          >
            💬 Pedir cotización personalizada
          </a>
        </div>
      </div>
    </section>
  )
}
