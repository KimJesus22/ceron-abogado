import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-[0.82rem] text-muted">
      <p>
        © {new Date().getFullYear()} Adrián Cerón López — Licenciado en Derecho · Jaral del Progreso, Guanajuato
      </p>
      <p className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
        <Link href="/aviso-de-privacidad" className="hover:text-accent transition-colors">
          Aviso de Privacidad
        </Link>
        <span aria-hidden="true">·</span>
        <Link href="/terminos-de-uso" className="hover:text-accent transition-colors">
          Términos de Uso
        </Link>
      </p>
    </footer>
  )
}
