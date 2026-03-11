// ─────────────────────────────────────────────────────────────────────────────
// Recursos legales — artículos estáticos
//
// Para agregar un artículo nuevo:
//   1. Copia el bloque de un artículo existente al final del array.
//   2. Cambia slug, title, excerpt, date, category, readTime y content.
//   3. El slug se convierte automáticamente en la ruta: /recursos/[slug]
//
// Tipos de bloque de contenido:
//   { type: 'h2',   text: '...' }          → subtítulo
//   { type: 'p',    text: '...' }          → párrafo
//   { type: 'ul',   items: ['...', ...] }  → lista con viñetas
//   { type: 'note', text: '...' }          → recuadro destacado (consejo / advertencia)
// ─────────────────────────────────────────────────────────────────────────────

import type { Article } from './types'

export const articles: Article[] = [
  // ── 1. Divorcio ────────────────────────────────────────────────────────────
  {
    slug: 'divorcio-en-mexico-tipos-y-pasos',
    title: 'Divorcio en México: tipos, pasos y lo que debes saber',
    excerpt:
      'Conoce las diferencias entre el divorcio incausado y el contencioso, qué documentos necesitas y cómo proteger tus derechos durante el proceso.',
    date: '2025-11-10',
    category: 'Derecho Familiar',
    readTime: 4,
    content: [
      {
        type: 'p',
        text: 'El divorcio es uno de los trámites legales más comunes en México. Aunque puede parecer complicado, entender los tipos y los pasos básicos te permite tomar mejores decisiones y prepararte para el proceso.',
      },
      {
        type: 'h2',
        text: 'Tipos de divorcio en México',
      },
      {
        type: 'ul',
        items: [
          'Divorcio incausado (unilateral): cualquiera de los cónyuges puede solicitarlo sin expresar una causa. Es el más común desde la reforma de 2008.',
          'Divorcio voluntario o por mutuo acuerdo: ambas partes están de acuerdo en los términos de la separación (bienes, hijos, pensión).',
          'Divorcio contencioso o necesario: cuando no hay acuerdo y se litiga ante un juez. Suele ser más largo y costoso.',
        ],
      },
      {
        type: 'h2',
        text: 'Documentos que normalmente se requieren',
      },
      {
        type: 'ul',
        items: [
          'Acta de matrimonio original (reciente, no mayor a 3 meses)',
          'Identificación oficial de ambos cónyuges',
          'Actas de nacimiento de los hijos, si los hay',
          'Comprobante de domicilio',
          'Escrituras o documentos de bienes si se va a liquidar la sociedad conyugal',
        ],
      },
      {
        type: 'h2',
        text: '¿Cuánto tarda un divorcio?',
      },
      {
        type: 'p',
        text: 'Un divorcio incausado sin hijos ni bienes disputados puede resolverse en pocas semanas. Cuando hay custodia, pensión alimenticia o división de bienes, el proceso puede extenderse varios meses, especialmente si no hay acuerdo entre las partes.',
      },
      {
        type: 'h2',
        text: 'Asuntos que deben quedar definidos',
      },
      {
        type: 'ul',
        items: [
          'Guarda y custodia de los hijos',
          'Régimen de visitas del padre o madre no custodio',
          'Pensión alimenticia (monto, forma y periodicidad de pago)',
          'Liquidación de la sociedad conyugal, si aplica',
          'Uso del domicilio conyugal durante el proceso',
        ],
      },
      {
        type: 'note',
        text: 'Antes de firmar cualquier convenio, es importante revisarlo con un abogado de confianza. Un acuerdo mal redactado puede afectar tus derechos y los de tus hijos a largo plazo.',
      },
    ],
  },

  // ── 2. Despido injustificado ────────────────────────────────────────────────
  {
    slug: 'despido-injustificado-derechos-y-liquidacion',
    title: 'Despido injustificado: tus derechos y cómo exigir tu liquidación',
    excerpt:
      'Si te despidieron sin causa justificada, la ley te protege. Aprende qué debes cobrar, en qué plazo debes actuar y qué errores evitar al recibir tu finiquito.',
    date: '2025-11-24',
    category: 'Derecho Laboral',
    readTime: 5,
    content: [
      {
        type: 'p',
        text: 'Ser despedido sin causa justificada es más común de lo que parece. La buena noticia es que la Ley Federal del Trabajo te protege y establece con claridad qué te corresponde recibir.',
      },
      {
        type: 'h2',
        text: '¿Qué es un despido injustificado?',
      },
      {
        type: 'p',
        text: 'Es cuando el patrón termina la relación laboral sin que exista alguna de las causas que la ley permite (robo, violencia, inasistencias injustificadas, etc.). Puede presentarse como despido directo, pero también como presión para que "renuncies voluntariamente".',
      },
      {
        type: 'h2',
        text: '¿Qué te corresponde cobrar?',
      },
      {
        type: 'ul',
        items: [
          '3 meses de salario integrado (indemnización constitucional)',
          '20 días de salario por cada año trabajado',
          'Partes proporcionales de vacaciones, prima vacacional y aguinaldo',
          'Prima de antigüedad (12 días por año a partir del primer año)',
          'Salarios caídos desde el despido hasta el pago, en ciertos casos',
        ],
      },
      {
        type: 'h2',
        text: 'Plazos que debes conocer',
      },
      {
        type: 'p',
        text: 'Tienes 2 meses desde el despido para presentar una demanda ante el Tribunal Laboral (ILTAC en Guanajuato o el TFCA federal según el tipo de empresa). Dejar pasar ese plazo puede hacer que pierdas el derecho a cobrar salarios caídos.',
      },
      {
        type: 'h2',
        text: 'Errores frecuentes al recibir el finiquito',
      },
      {
        type: 'ul',
        items: [
          'Firmar documentos sin leerlos ni entenderlos completamente',
          'Firmar una "liquidación completa" cuando el monto es incorrecto',
          'No guardar copia de contratos, recibos de nómina ni comunicaciones',
          'Aceptar cantidades a cuenta sin dejar constancia de que el pago está incompleto',
        ],
      },
      {
        type: 'note',
        text: 'Si te ofrecen un finiquito en el momento del despido, tienes derecho a revisarlo con calma. No estás obligado a firmarlo en ese instante. Consúltalo con un abogado antes de aceptar cualquier monto.',
      },
    ],
  },

  // ── 3. Herencias ───────────────────────────────────────────────────────────
  {
    slug: 'herencias-en-mexico-tramite-de-sucesion',
    title: 'Herencias en México: cómo iniciar el trámite de sucesión',
    excerpt:
      '¿Falleció un familiar y no sabes por dónde empezar? Explora los tipos de sucesión, los documentos necesarios y los pasos para adjudicar los bienes correctamente.',
    date: '2025-12-05',
    category: 'Derecho Civil',
    readTime: 5,
    content: [
      {
        type: 'p',
        text: 'El fallecimiento de un ser querido trae consigo, además del duelo, la necesidad de tramitar legalmente la herencia. Conocer el proceso con anticipación ayuda a evitar conflictos familiares y retrasos innecesarios.',
      },
      {
        type: 'h2',
        text: 'Tipos de sucesión',
      },
      {
        type: 'ul',
        items: [
          'Sucesión testamentaria: existe un testamento válido que indica cómo se distribuyen los bienes.',
          'Sucesión intestamentaria (sin testamento): la ley determina quiénes son los herederos según el parentesco.',
          'Sucesión mixta: cuando hay testamento para algunos bienes pero no para otros.',
        ],
      },
      {
        type: 'h2',
        text: 'Documentos que se necesitan al inicio',
      },
      {
        type: 'ul',
        items: [
          'Acta de defunción del fallecido',
          'Testamento (si existe) o acta de matrimonio y actas de nacimiento de herederos',
          'Identificaciones oficiales de los herederos',
          'Documentos de los bienes: escrituras, estados de cuenta, títulos de vehículos, etc.',
          'CURP y RFC del fallecido, si se conocen',
        ],
      },
      {
        type: 'h2',
        text: '¿Ante quién se tramita?',
      },
      {
        type: 'p',
        text: 'Cuando todos los herederos están de acuerdo y son mayores de edad, el trámite puede hacerse ante notario público sin acudir a juicio. Si hay menores de edad, bienes en disputa o desacuerdos, el proceso se lleva ante un juez de lo civil.',
      },
      {
        type: 'h2',
        text: 'Pasos generales del proceso',
      },
      {
        type: 'ul',
        items: [
          '1. Reúne los documentos básicos y consulta a un abogado o notario.',
          '2. Se abre el juicio sucesorio (o escritura notarial si es extrajudicial).',
          '3. Se identifican y valoran los bienes del fallecido.',
          '4. Se pagan deudas y obligaciones fiscales pendientes.',
          '5. Se adjudican los bienes a cada heredero mediante escritura pública.',
        ],
      },
      {
        type: 'note',
        text: 'Aunque la ley no impone un plazo para iniciar el trámite, entre más tiempo pase es más difícil reunir documentos, localizar bienes y conseguir el acuerdo de todos los herederos. Lo más recomendable es iniciar cuanto antes.',
      },
    ],
  },

  // ── 4. Compraventa de inmueble ──────────────────────────────────────────────
  {
    slug: 'comprar-inmueble-guanajuato-que-revisar',
    title: 'Comprar un inmueble en Guanajuato: qué revisar antes de firmar',
    excerpt:
      'Adquirir una casa o terreno es una de las decisiones más importantes de tu vida. Conoce los puntos clave que debes verificar para evitar fraudes y sorpresas legales.',
    date: '2025-12-18',
    category: 'Derecho Inmobiliario',
    readTime: 4,
    content: [
      {
        type: 'p',
        text: 'Comprar un bien inmueble en Guanajuato —ya sea casa, departamento o terreno— implica una inversión considerable. Un error en el proceso puede costarte tiempo, dinero y mucho estrés. Estos son los puntos clave que debes verificar.',
      },
      {
        type: 'h2',
        text: '1. Verifica la propiedad en el Registro Público',
      },
      {
        type: 'p',
        text: 'Antes de cualquier trato, solicita una constancia de libertad de gravamen en el Registro Público de la Propiedad del municipio. Este documento confirma que el inmueble no tiene hipotecas, embargos ni litigios pendientes.',
      },
      {
        type: 'h2',
        text: '2. Confirma que el vendedor es el dueño legítimo',
      },
      {
        type: 'p',
        text: 'Pide la escritura pública original y compárala con los datos del Registro Público. Desconfía cuando el vendedor no puede mostrar la escritura o cuando alguien vende en nombre de otro sin un poder notarial vigente.',
      },
      {
        type: 'h2',
        text: '3. Revisa el estado fiscal del inmueble',
      },
      {
        type: 'ul',
        items: [
          'Predial al corriente (solicita constancia de no adeudo en el municipio)',
          'Agua y servicios sin adeudos pendientes',
          'Impuesto sobre adquisición de inmuebles (ISAI), que normalmente paga el comprador',
        ],
      },
      {
        type: 'h2',
        text: '4. Cuidado con los contratos privados',
      },
      {
        type: 'p',
        text: 'Un contrato de compraventa privado no te transfiere la propiedad legalmente. La compraventa solo es definitiva cuando se formaliza ante notario público y se inscribe en el Registro Público de la Propiedad.',
      },
      {
        type: 'h2',
        text: '5. Señales de alerta de posibles fraudes',
      },
      {
        type: 'ul',
        items: [
          'Precio muy por debajo del mercado sin explicación',
          'Urgencia para cerrar el trato de inmediato',
          'Vendedor que evita ir al notario o propone "escriturar después"',
          'Documentos con tachaduras, alteraciones o inconsistencias',
          'Inmueble con varios "dueños" que no están de acuerdo entre sí',
        ],
      },
      {
        type: 'note',
        text: 'Invertir en la revisión legal previa a la compra suele costar mucho menos que resolver un problema después. Un abogado puede revisar los documentos y acompañarte al notario para que tu inversión quede protegida desde el primer día.',
      },
    ],
  },
]

// ── Utilidades ────────────────────────────────────────────────────────────────

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
