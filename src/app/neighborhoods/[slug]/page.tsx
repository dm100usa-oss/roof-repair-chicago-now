import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { neighborhoods } from '@/lib/neighborhoods'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import { locales, type Locale } from '@/lib/i18n'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from '../neighborhood.module.css'

type Props = { params: { lang: string; slug: string } }

export function generateStaticParams() {
  return locales.flatMap(lang => neighborhoods.map(n => ({ lang, slug: n.slug })))
}

export function generateMetadata({ params }: Props): Metadata {
  const n = neighborhoods.find(n => n.slug === params.slug)
  if (!n) return {}
  const isEs = params.lang === 'es'
  return {
    title: `${n.title} — Roof Repair Chicago NOW`,
    description: n.metaDescription,
    alternates: {
      canonical: `https://roofrepairchicagonow.com/neighborhoods/${n.slug}`,
      languages: {
        'en': `https://roofrepairchicagonow.com/neighborhoods/${n.slug}`,
        'es': `https://roofrepairchicagonow.com/es/neighborhoods/${n.slug}`,
      },
    },
  }
}

export default function LangNeighborhoodPage({ params }: Props) {
  const n = neighborhoods.find(n => n.slug === params.slug)
  if (!n) notFound()
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()
  const isEs = lang === 'es'

  const labels = {
    home: isEs ? 'Inicio' : 'Home',
    neighborhoods: isEs ? 'Barrios' : 'Neighborhoods',
    ranked: isEs ? '10 empresas clasificadas' : '10 companies ranked',
    about: isEs ? `Sobre techados en ${n.name}` : `About roofing in ${n.name}`,
    faqTitle: isEs ? `Preguntas sobre reparación de techos en ${n.name}` : `Questions about roof repair in ${n.name}`,
    ctaH2: isEs ? `¿Necesita un techero en ${n.name} hoy?` : `Need a roofer in ${n.name} today?`,
    ctaP: isEs ? 'Llame a nuestro centro de despacho — lo conectamos con un techero disponible rápido. Gratis, sin compromiso.' : "Call our dispatch center — we'll connect you with an available roofer fast. Free, no obligation.",
    callNow: isEs ? `LLAMAR AHORA — ${MAIN_PHONE_DISPLAY}` : `CALL NOW — ${MAIN_PHONE_DISPLAY}`,
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <a href={isEs ? '/es' : '/'}>{labels.home}</a> › <a href={isEs ? '/es/neighborhoods' : '/neighborhoods'}>{labels.neighborhoods}</a> › {n.name}
          </div>
          <h1>{n.title}</h1>
          <p>{n.intro}</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
            {labels.callNow}
          </a>
        </div>
      </section>

      <section className={styles.companies}>
        <div className={styles.companiesInner}>
          <div className={styles.sectionLabel}>{labels.ranked}</div>
          {companies.map((company, i) => (
            <CompanyCard key={company.id} company={company} isFirst={i === 0} lang={lang} />
          ))}
        </div>
      </section>

      <section className={styles.areaInfo}>
        <div className={styles.areaInner}>
          <h2>{labels.about}</h2>
          <p>{n.areaText}</p>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>{labels.faqTitle}</div>
          {n.faq.map(item => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <InternalLinks type="neighborhood" currentSlug={n.slug} />

      <section className={styles.ctaBottom}>
        <div className={styles.ctaInner}>
          <h2>{labels.ctaH2}</h2>
          <p>{labels.ctaP}</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallDark}>
            {labels.callNow}
          </a>
        </div>
      </section>
    </div>
  )
}
