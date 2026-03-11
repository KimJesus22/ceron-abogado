import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad — Adrián Cerón López',
  description: 'Aviso de privacidad conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).',
}

export default function AvisoDePrivacidad() {
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
          Privacidad
        </span>
        <h1 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.5px] mb-2">
          Aviso de Privacidad
        </h1>
        <p className="text-muted text-[0.85rem] mb-10">
          Última actualización: marzo de 2025
        </p>

        <div className="prose-legal">

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">1. Responsable del tratamiento</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              <strong className="text-[#111]">Adrián Cerón López</strong>, Licenciado en Derecho con cédula profesional registrada, con domicilio en Jaral del Progreso, Guanajuato, México, es el responsable del tratamiento de sus datos personales conforme a lo dispuesto por la <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</em> (LFPDPPP) y su Reglamento.
            </p>
            <p className="text-muted text-[0.92rem] leading-relaxed mt-3">
              Contacto: <a href="mailto:ceronadrian770@gmail.com" className="text-accent hover:underline">ceronadrian770@gmail.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">2. Datos personales recabados</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed mb-3">
              A través de los formularios de este sitio web se pueden recabar los siguientes datos personales:
            </p>
            <ul className="list-disc pl-5 text-muted text-[0.92rem] leading-relaxed space-y-1">
              <li><strong className="text-[#111]">Nombre completo</strong> — identificación del solicitante</li>
              <li><strong className="text-[#111]">Número de teléfono</strong> — contacto de seguimiento (opcional)</li>
              <li><strong className="text-[#111]">Correo electrónico</strong> — suscripción al newsletter</li>
              <li><strong className="text-[#111]">Descripción del caso</strong> — área legal de interés y detalle de la consulta</li>
            </ul>
            <p className="text-muted text-[0.92rem] leading-relaxed mt-3">
              No se recaban datos personales sensibles (salud, origen racial, creencias religiosas, filiación política, etc.) a través de este sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">3. Finalidades del tratamiento</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed mb-2">
              <strong className="text-[#111]">Finalidades primarias</strong> (necesarias para la relación jurídica):
            </p>
            <ul className="list-disc pl-5 text-muted text-[0.92rem] leading-relaxed space-y-1 mb-4">
              <li>Atender su solicitud de consulta o asesoría legal</li>
              <li>Dar seguimiento a casos y comunicaciones relacionadas con los servicios prestados</li>
            </ul>
            <p className="text-muted text-[0.92rem] leading-relaxed mb-2">
              <strong className="text-[#111]">Finalidades secundarias</strong> (puede oponerse en cualquier momento):
            </p>
            <ul className="list-disc pl-5 text-muted text-[0.92rem] leading-relaxed space-y-1">
              <li>Envío de información jurídica de interés general mediante el newsletter</li>
              <li>Análisis estadístico interno para mejorar los servicios ofrecidos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">4. Transferencia de datos</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed mb-3">
              Los datos personales pueden ser procesados por los siguientes terceros en calidad de <strong className="text-[#111]">encargados del tratamiento</strong> (no ceden datos a terceros para fines propios):
            </p>
            <ul className="list-disc pl-5 text-muted text-[0.92rem] leading-relaxed space-y-2">
              <li>
                <strong className="text-[#111]">Supabase Inc.</strong> — almacenamiento seguro de la base de datos.
                Política de privacidad: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">supabase.com/privacy</a>
              </li>
              <li>
                <strong className="text-[#111]">Resend Inc.</strong> — envío de notificaciones por correo electrónico (solo si aplica).
                Política de privacidad: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">resend.com/legal/privacy-policy</a>
              </li>
            </ul>
            <p className="text-muted text-[0.92rem] leading-relaxed mt-3">
              No se realizan transferencias a terceros con fines distintos a los señalados en este aviso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">5. Derechos ARCO</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed mb-3">
              Usted tiene derecho a <strong className="text-[#111]">Acceder, Rectificar, Cancelar u Oponerse</strong> al tratamiento de sus datos personales (derechos ARCO), así como a revocar el consentimiento otorgado y limitar el uso de sus datos.
            </p>
            <p className="text-muted text-[0.92rem] leading-relaxed mb-3">
              Para ejercer estos derechos, envíe una solicitud al correo <a href="mailto:ceronadrian770@gmail.com" className="text-accent hover:underline">ceronadrian770@gmail.com</a> indicando:
            </p>
            <ul className="list-disc pl-5 text-muted text-[0.92rem] leading-relaxed space-y-1">
              <li>Su nombre completo e identificación oficial</li>
              <li>El derecho que desea ejercer y los datos involucrados</li>
              <li>Correo o teléfono de respuesta</li>
            </ul>
            <p className="text-muted text-[0.92rem] leading-relaxed mt-3">
              Responderemos en un plazo máximo de <strong className="text-[#111]">20 días hábiles</strong> conforme a la LFPDPPP.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">6. Medidas de seguridad</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Los datos se almacenan en servidores con cifrado en tránsito (HTTPS/TLS) y en reposo. El acceso a la información está restringido mediante autenticación y políticas de seguridad a nivel de base de datos (Row Level Security). Solo el titular del despacho tiene acceso a los registros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">7. Cambios al aviso de privacidad</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Cualquier modificación a este aviso se publicará en esta misma página. Se recomienda revisar periódicamente para estar informado sobre cómo se protegen sus datos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.05rem] font-bold mb-3">8. Autoridad supervisora</h2>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Si considera que sus derechos no han sido debidamente atendidos, puede presentar una queja ante el <strong className="text-[#111]">Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong>:{' '}
              <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.inai.org.mx</a>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-accent text-[0.85rem] font-semibold hover:underline"
          >
            ← Volver al inicio
          </Link>
        </div>

      </div>
    </main>
  )
}
