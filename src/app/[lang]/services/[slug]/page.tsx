import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import { locales, type Locale } from '@/lib/i18n'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from '../../neighborhoods/neighborhood.module.css'

type Props = { params: { lang: string; slug: string } }

export function generateStaticParams() {
  return locales.flatMap(lang => services.map(s => ({ lang, slug: s.slug })))
}

export function generateMetadata({ params }: Props): Metadata {
  const s = services.find(s => s.slug === params.slug)
  if (!s) return {}
  return {
    title: `${s.title} — Roof Repair Chicago NOW`,
    description: s.metaDescription,
    alternates: {
      canonical: `https://roofrepairchicagonow.com/services/${s.slug}`,
      languages: {
        'en': `https://roofrepairchicagonow.com/services/${s.slug}`,
        'es': `https://roofrepairchicagonow.com/es/services/${s.slug}`,
      },
    },
  }
}

export default function LangServicePage({ params }: Props) {
  const s = services.find(s => s.slug === params.slug)
  if (!s) notFound()
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()
  const isEs = lang === 'es'

  const labels = {
    home: isEs ? 'Inicio' : 'Home',
    ranked: isEs ? '10 empresas clasificadas' : '10 companies ranked',
    about: isEs ? `Sobre ${s.name} en Chicago` : `About ${s.name} in Chicago`,
    faqTitle: isEs ? `Preguntas sobre ${s.name} en Chicago` : `Questions about ${s.name} in Chicago`,
    ctaH2: isEs ? `¿Necesita ${s.name.toLowerCase()} en Chicago hoy?` : `Need ${s.name.toLowerCase()} in Chicago today?`,
    ctaP: isEs ? 'Llame a nuestro centro de despacho — lo conectamos con un techero disponible rápido. Gratis, sin compromiso.' : "Call our dispatch center — we'll connect you with an available roofer fast. Free, no obligation.",
    callNow: isEs ? `LLAMAR AHORA — ${MAIN_PHONE_DISPLAY}` : `CALL NOW — ${MAIN_PHONE_DISPLAY}`,
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <a href={isEs ? '/es' : '/'}>{labels.home}</a> › {s.name}
          </div>
          <h1>{s.title}</h1>
          <p>{s.intro}</p>
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
          <p>{s.bodyText}</p>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>{labels.faqTitle}</div>
          {s.faq.map(item => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <InternalLinks type="service" currentSlug={s.slug} />

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
