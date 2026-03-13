import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos de Uso — Adrián Cerón López',
  description: 'Términos y condiciones de uso del sitio web de Adrián Cerón López, Licenciado en Derecho.',
}

export default function TerminosDeUso() {
  return (
    <main className="py-20 px-8">
      <div className="max-w-[760px] mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-1 text-accent text-[0.85rem] font-semibold mb-8 hover:underline"
        >
          ← Volver al inicio
        </Link>

        <span className="inline-block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-2">
          Legal
        </span>
        <h1 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.5px] mb-2">
          Términos de Uso
        </h1>
        <p className="text-muted text-[0.85rem] mb-10">
          Última actualización: marzo de 2025
        </p>

        <div className="prose-legal">

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">1. Aceptación de los términos</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Al acceder y utilizar este sitio web (<strong className="text-[#111]">ceronabogado.com</strong>),
              usted acepta quedar vinculado por los presentes Términos de Uso. Si no está de acuerdo con
              alguno de estos términos, le pedimos que no utilice el sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">2. Carácter informativo del contenido</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed mb-3">
              La información publicada en este sitio —incluyendo artículos, tarifas orientativas y
              descripciones de servicios— tiene <strong className="text-[#111]">finalidad exclusivamente informativa</strong> y
              no constituye asesoría jurídica formal ni crea una relación abogado-cliente.
            </p>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Cada situación legal es diferente. Para obtener orientación aplicable a su caso concreto,
              le recomendamos solicitar una consulta directamente con el Lic. Adrián Cerón López.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">3. Datos de contacto y suscriptores</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed mb-3">
              Los datos personales que usted proporcione a través de los formularios de contacto o del
              newsletter serán tratados conforme a lo descrito en el{' '}
              <Link href="/aviso-de-privacidad" className="text-accent hover:underline">
                Aviso de Privacidad
              </Link>
              , de acuerdo con la <em>Ley Federal de Protección de Datos Personales en Posesión de los
              Particulares</em> (LFPDPPP).
            </p>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              En resumen: sus datos se usan únicamente para atender su consulta o enviarle información
              legal de interés, nunca se venden ni comparten con terceros con fines propios, y puede
              ejercer sus derechos ARCO en cualquier momento escribiendo a{' '}
              <a href="mailto:ceronadrian770@gmail.com" className="text-accent hover:underline">
                ceronadrian770@gmail.com
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">4. Propiedad intelectual</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Los textos, diseño, estructura y contenidos de este sitio son propiedad del
              <strong className="text-[#111]"> Lic. Adrián Cerón López</strong> o de sus respectivos
              autores. Queda prohibida su reproducción total o parcial sin autorización expresa y por
              escrito, salvo para uso personal y no comercial.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">5. Limitación de responsabilidad</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              El Lic. Adrián Cerón López no se hace responsable de los daños o perjuicios derivados del
              uso de la información contenida en este sitio, de errores u omisiones en el contenido, ni
              de la interrupción temporal del servicio por causas técnicas ajenas a su control. La
              consulta de este sitio no reemplaza la asesoría profesional individualizada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">6. Enlaces externos</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Este sitio puede contener enlaces a páginas de terceros (por ejemplo, políticas de
              privacidad de proveedores tecnológicos). Estos enlaces se facilitan únicamente como
              referencia; el Lic. Adrián Cerón López no controla ni respalda el contenido de dichos
              sitios externos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">7. Modificaciones</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Estos términos podrán actualizarse en cualquier momento. La versión vigente siempre estará
              disponible en esta página. El uso continuado del sitio tras la publicación de cambios
              implica la aceptación de los términos modificados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">8. Ley aplicable y jurisdicción</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Estos términos se rigen por las leyes de los <strong className="text-[#111]">Estados Unidos
              Mexicanos</strong>. Para cualquier controversia derivada del uso de este sitio, las partes
              se someten a la jurisdicción de los tribunales competentes del estado de{' '}
              <strong className="text-[#111]">Guanajuato</strong>, con renuncia expresa a cualquier otro
              fuero que pudiera corresponderles.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-accent text-[0.85rem] font-semibold hover:underline"
          >
            ← Volver al inicio
          </Link>
          <Link
            href="/aviso-de-privacidad"
            className="inline-flex items-center gap-1 text-accent text-[0.85rem] font-semibold hover:underline"
          >
            Aviso de Privacidad →
          </Link>
        </div>

      </div>
    </main>
  )
}
