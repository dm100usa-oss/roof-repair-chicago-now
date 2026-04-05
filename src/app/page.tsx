import type { Metadata } from 'next'
import { companies, MAIN_PHONE, MAIN_PHONE_DISPLAY } from '@/lib/companies'
import CompanyCard from '@/components/CompanyCard'
import InternalLinks from '@/components/InternalLinks'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Roof Repair Chicago NOW — Top 10 Vetted Companies',
  description: 'We researched roof repair companies in Chicago and selected the top 10 — same-day availability, free estimates, warranty on all work.',
  alternates: { canonical: 'https://roofrepairchicagonow.com' },
}

const faqItems = [
  {
    q: 'How quickly can a roofer come to my home in Chicago?',
    a: 'Most companies on our list offer same-day service for emergency repairs. After you call, a roofer can typically arrive within 2–4 hours depending on your location in Chicago.',
  },
  {
    q: 'How much does roof repair cost in Chicago?',
    a: 'Minor repairs start around $200–$350. Storm damage or full section replacement typically runs $400–$1,500+. All companies on our list offer free on-site estimates before any work begins.',
  },
  {
    q: 'Are these roofing companies licensed and insured in Illinois?',
    a: 'Yes. We verify licensing and insurance for every company before ranking them. Only fully licensed and insured roofers make our list.',
  },
  {
    q: 'How do you rank roofing companies?',
    a: 'We evaluate each company on licensing, Google reviews, response time, warranty terms, and pricing transparency. Our expert score reflects all these factors combined. See our full methodology on the How We Rank page.',
  },
  {
    q: 'Is this service free to use?',
    a: 'Yes, completely free for homeowners. We may receive compensation from companies for referrals, but this does not affect our rankings. Full details in our Disclosure.',
  },
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Top 10 Roof Repair Companies in Chicago',
        url: 'https://roofrepairchicagonow.com',
        description: 'We researched roof repair companies in Chicago and selected the top 10 — same-day availability, free estimates, warranty on all work.',
      },
      {
        '@type': 'ItemList',
        name: 'Top 10 Roof Repair Companies in Chicago',
        numberOfItems: companies.length,
        itemListElement: companies.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'LocalBusiness',
            name: c.name,
            telephone: c.phone,
            address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', addressCountry: 'US' },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: c.googleRating, reviewCount: c.googleReviews },
          },
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>We researched roof repair companies in Chicago and selected the top 10</h1>
          <p className={styles.heroSub}>Same-day availability, free estimates, and a warranty on all work. Every company verified by our team.</p>
          <div className={styles.factors}>
            <div className={styles.factor}>Same-day availability</div>
            <div className={styles.factor}>Free estimate</div>
            <div className={styles.factor}>Warranty on work</div>
          </div>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCall}>
            CALL NOW — {MAIN_PHONE_DISPLAY}
          </a>
          <div className={styles.btnCallNote}>Free · No obligation · Available 24/7</div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>10</div>
            <div className={styles.trustLabel}>Companies ranked</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>24/7</div>
            <div className={styles.trustLabel}>Emergency service</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>Same day</div>
            <div className={styles.trustLabel}>Response</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustNum}>Free</div>
            <div className={styles.trustLabel}>Inspection</div>
          </div>
        </div>
      </div>

      {/* WHY US */}
      <section className={styles.whyUs}>
        <div className={styles.whyInner}>
          <div className={styles.sectionLabel}>Why this service</div>
          <div className={styles.whyTitle}>We don't list everyone. We rank the best.</div>
          <div className={styles.whyGrid}>
            {[
              { title: 'Independently researched', text: 'We evaluate licensing, reviews, warranties, and response time before any company makes our list.' },
              { title: 'Same-day response', text: 'Every company on our list offers same-day availability for emergency repairs in Chicago.' },
              { title: 'Warranty guaranteed', text: 'All companies provide written warranties on labor. We verify this before ranking.' },
              { title: 'Chicago only', text: 'We focus exclusively on local Chicago roofers who know your neighborhood, weather, and building types.' },
            ].map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className={styles.companies}>
        <div className={styles.companiesInner}>
          <div className={styles.rankedLabel}>10 companies ranked</div>
          {companies.map((company, i) => (
            <CompanyCard key={company.id} company={company} isFirst={i === 0} />
          ))}
        </div>
      </section>

      {/* URGENCY */}
      <section className={styles.urgency}>
        <div className={styles.urgencyInner}>
          <h2>Roof leaking right now?</h2>
          <p>Don't wait. Our dispatch team connects you with an available roofer in Chicago within minutes. Free, no obligation.</p>
          <a href={`tel:${MAIN_PHONE}`} className={styles.btnCallUrgency}>
            CALL NOW — {MAIN_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitle}>Frequently asked questions</div>
          {faqItems.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <div className={styles.faqA}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <InternalLinks type="home" />

      {/* REVIEWS PLACEHOLDER */}
      <section className={styles.reviews}>
        <div className={styles.reviewsInner}>
          <div className={styles.reviewsTitle}>What our users say</div>
          <div className={styles.reviewsSub}>Real reviews from Chicago homeowners who found their roofer here.</div>
          <div className={styles.reviewsPlaceholder}>
            Reviews coming soon — this section will be filled with verified user experiences.
          </div>
        </div>
      </section>
    </>
  )
}
