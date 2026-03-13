const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': `${siteUrl}/#business`,
      name: 'Adrián Cerón López — Licenciado en Derecho',
      description:
        'Asesoría legal comprometida, clara y accesible en Jaral del Progreso, Guanajuato. Derecho Familiar, Civil, Penal, Laboral, Preventivo e Inmobiliario. Primera consulta gratuita.',
      url: siteUrl,
      telephone: '+52-456-126-6998',
      email: 'ceronadrian770@gmail.com',
      image: `${siteUrl}/profile.jpg`,
      priceRange: '$$',
      currenciesAccepted: 'MXN',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaral del Progreso',
        addressRegion: 'Guanajuato',
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 20.3667,
        longitude: -101.0667,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      areaServed: [
        { '@type': 'City', name: 'Jaral del Progreso' },
        { '@type': 'City', name: 'Valle de Santiago' },
        { '@type': 'City', name: 'Yuriria' },
        { '@type': 'City', name: 'Salvatierra' },
        { '@type': 'City', name: 'Uriangato' },
        { '@type': 'City', name: 'Moroleón' },
        { '@type': 'City', name: 'Salamanca' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios Legales',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Derecho Familiar',
              description: 'Divorcios, custodia de menores, pensión alimenticia, adopción y violencia familiar.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Derecho Civil',
              description: 'Herencias, sucesiones, contratos, responsabilidad civil y demandas civiles.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Derecho Penal',
              description: 'Defensa penal, asesoría a víctimas, delitos del fuero común y amparo.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Derecho Laboral',
              description: 'Despidos injustificados, liquidaciones, demandas ante el ILTAC y IMSS.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Asesoría Preventiva',
              description: 'Revisión de contratos, consultoría empresarial y prevención de litigios.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Derecho Inmobiliario',
              description: 'Compraventa de inmuebles, arrendamientos, regularización de propiedades y escrituración.',
            },
          },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Adrián Cerón López',
      jobTitle: 'Licenciado en Derecho',
      worksFor: { '@id': `${siteUrl}/#business` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaral del Progreso',
        addressRegion: 'Guanajuato',
        addressCountry: 'MX',
      },
      email: 'ceronadrian770@gmail.com',
      telephone: '+52-456-126-6998',
      image: `${siteUrl}/profile.jpg`,
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/<\//g, '<\\/'),
      }}
    />
  )
}
