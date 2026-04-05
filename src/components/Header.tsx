'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const isEs = pathname.startsWith('/es')
  const togglePath = isEs ? pathname.replace(/^\/es/, '') || '/' : `/es${pathname}`

  return (
    <>
      <div className={styles.langBar}>
        <span>{isEs ? 'También disponible en' : 'Also available in'}</span>
        {isEs
          ? <Link href={togglePath}>English</Link>
          : <Link href={togglePath}>Español</Link>
        }
      </div>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href={isEs ? '/es' : '/'} className={styles.logo}>
            Roof Repair Chicago <span>NOW</span>
          </Link>
        </div>
      </header>
    </>
  )
}
