import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, dict, type Locale } from '@/lib/i18n'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import { neighborhoods } from '@/lib/neighborhoods'
import { services } from '@/lib/services'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from './page.module.css'

type Props = { params: { lang: string } }

export function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) return {}
  const isEs = lang === 'es'
  return {
    title: isEs
      ? 'Reparación de Techos Chicago NOW — Top 10 Empresas'
      : 'Roof Repair Chicago NOW — Top 10 Vetted Companies',
    description: isEs
      ? 'Investigamos empresas de reparación de techos en Chicago y seleccionamos las 10 mejores — disponibilidad el mismo día, presupuestos gratuitos y garantía.'
      : 'We researched roof repair companies in Chicago and selected the top 10 — same-day availability, free estimates, warranty on all work.',
    alternates: {
      canonical: isEs ? 'https://roofrepairchicagonow.com/es' : 'https://roofrepairchicagonow.com',
      languages: {
        'en': 'https://roofrepairchicagonow.com',
        'es': 'https://roofrepairchicagonow.com/es',
      },
    },
  }
}

export default function LangHomePage({ params }: Props) {
  const lang = params.lang as Locale
  if (!locales.includes(lang)) notFound()
  const t = dict[lang]
  const isEs = lang === 'es'

  const faqItems = [
    { q: t.faq1q, a: t.faq1a },
    { q: t.faq2q, a: t.faq2a },
    { q: t.faq3q, a: t.faq3a },
    { q: t.faq4q, a: t.faq4a },
    { q: t.faq5q, a: t.faq5a },
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>{t.heroH1}</h1>
          <p className={styles.heroSub}>{t.heroSub}</p>
          <div className={styles.factors}>
            <div className={styles.factor}>{t.factor1}</div>
            <div className={styles.factor}>{t.factor2}</div>
            <div className={styles.factor}>{t.factor3}</div>
          </div>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
            {t.callNow} — {MAIN_PHONE_DISPLAY}
          </a>
          <div className={styles.btnCallNote}>
            {isEs ? 'Sin pago anticipado · Vamos a usted · Sin cargos ocultos' : 'No upfront payment · We come to you · No hidden fees'}
          </div>
        </div>
      </section>

      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>10</div>
            <div className={styles.trustLabel}>{t.companiesRanked}</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>24/7</div>
            <div className={styles.trustLabel}>{t.emergencyService}</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>{isEs ? 'Calidad' : 'Quality'}</div>
            <div className={styles.trustLabel}>{isEs ? 'Trabajo verificado' : 'Verified work'}</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>{isEs ? 'Accesible' : 'Affordable'}</div>
            <div className={styles.trustLabel}>{isEs ? 'Precios desde $200' : 'Prices from $200'}</div>
          </div>
        </div>
      </div>

      <section className={styles.whyUs}>
        <div className={styles.whyInner}>
          <div className={styles.sectionLabel}>{t.whyLabel}</div>
          <div className={styles.whyTitle}>{t.whyTitle}</div>
          <div className={styles.whyGrid}>
            {[
              { title: t.why1Title, text: t.why1Text },
              { title: t.why2Title, text: t.why2Text },
              { title: t.why3Title, text: t.why3Text },
              { title: t.why4Title, text: t.why4Text },
            ].map(item => (
              <div key={item.title} className={styles.whyCard}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.companies}>
        <div className={styles.companiesInner}>
          <div className={styles.rankedLabel}>{t.companiesLabel}</div>
          {companies.map((company, i) => (
            <CompanyCard key={company.id} company={company} isFirst={i === 0} lang={lang} />
          ))}
        </div>
      </section>

      <section className={styles.urgency}>
        <div className={styles.urgencyInner}>
          <h2>{t.urgencyH2}</h2>
          <p>{t.urgencyText}</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallUrgency}>
            {t.callNow} — {MAIN_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>{t.faqTitle}</div>
          {faqItems.map(item => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <InternalLinks type="home" lang={lang} />

      <section className={styles.reviews}>
        <div className={styles.reviewsInner}>
          <div className={styles.reviewsTitle}>{t.reviewsTitle}</div>
          <div className={styles.reviewsSub}>{t.reviewsSub}</div>
          <div className={styles.reviewsPlaceholder}>{t.reviewsPlaceholder}</div>
        </div>
      </section>
    </>
  )
}
