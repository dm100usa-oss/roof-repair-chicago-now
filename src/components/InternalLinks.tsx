import Link from 'next/link'
import styles from './InternalLinks.module.css'

type Props = {
  type: 'home' | 'neighborhood' | 'service' | 'article'
  currentSlug?: string
}

const serviceLinks = [
  { href: '/services/emergency-roof-repair', label: 'Emergency Roof Repair Chicago' },
  { href: '/services/roof-leak-repair', label: 'Roof Leak Repair Chicago' },
  { href: '/services/flat-roof-repair', label: 'Flat Roof Repair Chicago' },
  { href: '/services/roof-repair-after-storm', label: 'Roof Repair After Storm' },
  { href: '/services/same-day-roof-repair', label: 'Same Day Roof Repair Chicago' },
  { href: '/services/roof-replacement', label: 'Roof Replacement Chicago' },
  { href: '/services/roof-inspection', label: 'Roof Inspection Chicago' },
]

const neighborhoodLinks = [
  { href: '/neighborhoods/north-side', label: 'North Side' },
  { href: '/neighborhoods/south-side', label: 'South Side' },
  { href: '/neighborhoods/west-side', label: 'West Side' },
  { href: '/neighborhoods/lincoln-park', label: 'Lincoln Park' },
  { href: '/neighborhoods/logan-square', label: 'Logan Square' },
  { href: '/neighborhoods/wicker-park', label: 'Wicker Park' },
  { href: '/neighborhoods/hyde-park', label: 'Hyde Park' },
  { href: '/neighborhoods/pilsen', label: 'Pilsen' },
  { href: '/neighborhoods/bucktown', label: 'Bucktown' },
  { href: '/neighborhoods/andersonville', label: 'Andersonville' },
]

const articleLinks = [
  { href: '/articles/how-to-choose', label: 'How to choose a roof repair company' },
  { href: '/articles/average-cost', label: 'Average cost of roof repair in Chicago' },
  { href: '/articles/signs-your-roof', label: 'Signs your roof needs immediate repair' },
  { href: '/articles/after-storm-damage', label: 'What to do after storm damage' },
  { href: '/articles/how-we-rank-companies', label: 'How we rank companies' },
]

export default function InternalLinks({ type, currentSlug }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {(type === 'home' || type === 'neighborhood' || type === 'article') && (
          <div className={styles.group}>
            <div className={styles.groupTitle}>Services</div>
            <div className={styles.links}>
              {serviceLinks.map(l => (
                <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
              ))}
            </div>
          </div>
        )}

        {(type === 'home' || type === 'service' || type === 'article') && (
          <div className={styles.group}>
            <div className={styles.groupTitle}>Chicago Neighborhoods</div>
            <div className={styles.links}>
              {neighborhoodLinks.map(l => (
                <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
              ))}
            </div>
          </div>
        )}

        {(type === 'home' || type === 'neighborhood' || type === 'service') && (
          <div className={styles.group}>
            <div className={styles.groupTitle}>Roofing guides</div>
            <div className={styles.links}>
              {articleLinks.map(l => (
                <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
