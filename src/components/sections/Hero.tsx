import { waUrl } from '@/lib/whatsapp'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-[calc(100vh-60px)] flex items-center justify-center text-center px-8 py-16"
    >
      <div className="max-w-[700px]">
        <span className="inline-block bg-[#eff6ff] text-accent text-[0.78rem] font-semibold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-6">
          Licenciado en Derecho
        </span>
        <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-5">
          Adrián <span className="text-accent">Cerón López</span>
        </h1>
        <p className="text-[0.9rem] text-muted mb-4"><span aria-hidden="true">📍</span> Jaral del Progreso, Guanajuato</p>
        <p className="text-[1.1rem] text-muted max-w-[520px] mx-auto mb-10">
          Asesoría legal comprometida, clara y accesible. Defiendo tus derechos
          con responsabilidad y dedicación.
        </p>
        <a
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-[0.95rem] px-8 py-3.5 rounded-lg transition-all hover:bg-accent-dark hover:-translate-y-px"
          href={waUrl('Hola Adrián, me gustaría una consulta legal.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consulta por WhatsApp con Adrián Cerón López"
        >
          <span aria-hidden="true">💬</span> Consulta por WhatsApp
        </a>
        <a
          className="inline-flex items-center gap-2 bg-transparent text-[#111] font-semibold text-[0.95rem] px-8 py-3.5 rounded-lg border border-border ml-4 mt-3 transition-all hover:border-accent hover:text-accent hover:-translate-y-px"
          href="#servicios"
        >
          Ver servicios
        </a>
      </div>
    </section>
  )
}
