export type Locale = 'en' | 'es'
export const locales: Locale[] = ['en', 'es']
export const defaultLocale: Locale = 'en'

export const dict = {
  en: {
    // Header
    alsoAvailableIn: 'Also available in',
    langSwitch: 'Español',
    langSwitchHref: '/es',

    // Hero
    heroH1: 'We researched roof repair companies in Chicago and selected the top 10',
    heroSub: 'Same-day availability, free estimates, and a warranty on all work. Every company verified by our team.',
    factor1: 'Same-day availability',
    factor2: 'Free estimate',
    factor3: 'Warranty on work',
    callNow: 'CALL NOW',
    callNote: 'Free · No obligation · Available 24/7',

    // Trust strip
    companiesRanked: 'Companies ranked',
    emergencyService: 'Emergency service',
    response: 'Response',
    sameDay: 'Same day',
    inspection: 'Inspection',
    free: 'Free',

    // Why us
    whyLabel: 'Why this service',
    whyTitle: "We don't list everyone. We rank the best.",
    why1Title: 'Independently researched',
    why1Text: 'We evaluate licensing, reviews, warranties, and response time before any company makes our list.',
    why2Title: 'Same-day response',
    why2Text: 'Every company on our list offers same-day availability for emergency repairs in Chicago.',
    why3Title: 'Warranty guaranteed',
    why3Text: 'All companies provide written warranties on labor. We verify this before ranking.',
    why4Title: 'Chicago only',
    why4Text: "We focus exclusively on local Chicago roofers who know your neighborhood, weather, and building types.",

    // Companies
    companiesLabel: '10 companies ranked',
    expertRating: 'Expert rating',
    getQuote: 'GET QUOTE',
    freeEstimate: 'Free estimate · Same-day available',
    emergency: 'Emergency',
    bookAhead: 'Book ahead',

    // Urgency
    urgencyH2: 'Roof leaking right now?',
    urgencyText: "Don't wait. Our dispatch team connects you with an available roofer in Chicago within minutes. Free, no obligation.",

    // FAQ
    faqTitle: 'Frequently asked questions',
    faq1q: 'How quickly can a roofer come to my home in Chicago?',
    faq1a: 'Most companies on our list offer same-day service for emergency repairs. After you call, a roofer can typically arrive within 2–4 hours depending on your location in Chicago.',
    faq2q: 'How much does roof repair cost in Chicago?',
    faq2a: 'Minor repairs start around $200–$350. Storm damage or full section replacement typically runs $400–$1,500+. All companies on our list offer free on-site estimates before any work begins.',
    faq3q: 'Are these roofing companies licensed and insured in Illinois?',
    faq3a: 'Yes. We verify licensing and insurance for every company before ranking them. Only fully licensed and insured roofers make our list.',
    faq4q: 'How do you rank roofing companies?',
    faq4a: 'We evaluate each company on licensing, Google reviews, response time, warranty terms, and pricing transparency. Our expert score reflects all these factors combined.',
    faq5q: 'Is this service free to use?',
    faq5a: 'Yes, completely free for homeowners. We may receive compensation from companies for referrals, but this does not affect our rankings. Full details in our Disclosure.',

    // Reviews
    reviewsTitle: 'What our users say',
    reviewsSub: 'Real reviews from Chicago homeowners who found their roofer here.',
    reviewsPlaceholder: 'Reviews coming soon — this section will be filled with verified user experiences.',

    // Footer
    about: 'About',
    howItWorks: 'How it works',
    contact: 'Contact',
    howWeRank: 'How we rank',
    privacyPolicy: 'Privacy Policy',
    disclosure: 'Disclosure',
    disclosureText: 'This website is an independent referral service. We may receive compensation for calls and referrals. Rankings are based on editorial research and do not constitute an endorsement.',
  },
  es: {
    alsoAvailableIn: 'También disponible en',
    langSwitch: 'English',
    langSwitchHref: '/',

    heroH1: 'Investigamos empresas de reparación de techos en Chicago y seleccionamos las 10 mejores',
    heroSub: 'Disponibilidad el mismo día, presupuestos gratuitos y garantía en todos los trabajos. Cada empresa verificada por nuestro equipo.',
    factor1: 'Disponibilidad el mismo día',
    factor2: 'Presupuesto gratuito',
    factor3: 'Garantía en el trabajo',
    callNow: 'LLAMAR AHORA',
    callNote: 'Gratis · Sin compromiso · Disponible 24/7',

    companiesRanked: 'Empresas clasificadas',
    emergencyService: 'Servicio de emergencia',
    response: 'Respuesta',
    sameDay: 'Mismo día',
    inspection: 'Inspección',
    free: 'Gratis',

    whyLabel: 'Por qué este servicio',
    whyTitle: 'No listamos a todos. Clasificamos a los mejores.',
    why1Title: 'Investigado de forma independiente',
    why1Text: 'Evaluamos licencias, reseñas, garantías y tiempos de respuesta antes de incluir cualquier empresa.',
    why2Title: 'Respuesta el mismo día',
    why2Text: 'Cada empresa en nuestra lista ofrece disponibilidad el mismo día para reparaciones de emergencia en Chicago.',
    why3Title: 'Garantía asegurada',
    why3Text: 'Todas las empresas proporcionan garantías escritas sobre la mano de obra. Lo verificamos antes de clasificar.',
    why4Title: 'Solo Chicago',
    why4Text: 'Nos enfocamos exclusivamente en techeros locales de Chicago que conocen tu barrio, el clima y los tipos de edificios.',

    companiesLabel: '10 empresas clasificadas',
    expertRating: 'Calificación experta',
    getQuote: 'COTIZAR',
    freeEstimate: 'Presupuesto gratis · Disponible hoy',
    emergency: 'Emergencia',
    bookAhead: 'Reservar',

    urgencyH2: '¿Su techo está goteando ahora mismo?',
    urgencyText: 'No espere. Nuestro equipo de despacho lo conecta con un techero disponible en Chicago en minutos. Gratis, sin compromiso.',

    faqTitle: 'Preguntas frecuentes',
    faq1q: '¿Qué tan rápido puede venir un techero a mi casa en Chicago?',
    faq1a: 'La mayoría de las empresas en nuestra lista ofrecen servicio el mismo día para reparaciones de emergencia. Después de llamar, un techero puede llegar en 2–4 horas según su ubicación en Chicago.',
    faq2q: '¿Cuánto cuesta la reparación de techos en Chicago?',
    faq2a: 'Las reparaciones menores comienzan en $200–$350. Los daños por tormenta o el reemplazo de una sección completa suelen costar $400–$1,500+. Todas las empresas ofrecen presupuestos gratuitos antes de comenzar.',
    faq3q: '¿Estas empresas de techado tienen licencia y seguro en Illinois?',
    faq3a: 'Sí. Verificamos la licencia y el seguro de cada empresa antes de clasificarla. Solo los techeros con licencia y seguro completos aparecen en nuestra lista.',
    faq4q: '¿Cómo clasifican a las empresas de techado?',
    faq4a: 'Evaluamos cada empresa en licencias, reseñas de Google, tiempo de respuesta, términos de garantía y transparencia de precios.',
    faq5q: '¿Este servicio es gratuito?',
    faq5a: 'Sí, completamente gratuito para los propietarios. Podemos recibir compensación de las empresas por referencias, pero esto no afecta nuestras clasificaciones.',

    reviewsTitle: 'Lo que dicen nuestros usuarios',
    reviewsSub: 'Reseñas reales de propietarios de Chicago que encontraron su techero aquí.',
    reviewsPlaceholder: 'Reseñas próximamente — esta sección se llenará con experiencias verificadas de usuarios.',

    about: 'Acerca de',
    howItWorks: 'Cómo funciona',
    contact: 'Contacto',
    howWeRank: 'Cómo clasificamos',
    privacyPolicy: 'Política de privacidad',
    disclosure: 'Declaración',
    disclosureText: 'Este sitio web es un servicio de referencia independiente. Podemos recibir compensación por llamadas y referencias. Las clasificaciones se basan en investigación editorial y no constituyen un respaldo.',
  },
}

export type Dict = typeof dict.en
