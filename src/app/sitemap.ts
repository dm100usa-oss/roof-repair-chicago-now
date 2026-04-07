import { MetadataRoute } from 'next'
import { neighborhoods } from '@/lib/neighborhoods'
import { services } from '@/lib/services'
import { articles } from '@/lib/articles'

const BASE = 'https://www.roofrepairchicagonow.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static pages — English
  const staticPages = [
    { url: BASE,                          lastModified: now, priority: 1.0 },
    { url: `${BASE}/roofing-guide`,       lastModified: now, priority: 0.9 },
    { url: `${BASE}/about`,               lastModified: now, priority: 0.5 },
    { url: `${BASE}/how-it-works`,        lastModified: now, priority: 0.5 },
    { url: `${BASE}/how-we-rank`,         lastModified: now, priority: 0.6 },
    { url: `${BASE}/contact`,             lastModified: now, priority: 0.4 },
    { url: `${BASE}/disclosure`,          lastModified: now, priority: 0.3 },
    { url: `${BASE}/privacy`,             lastModified: now, priority: 0.3 },
  ]

  // Static pages — Spanish
  const staticPagesEs = [
    { url: `${BASE}/es`,                  lastModified: now, priority: 0.9 },
    { url: `${BASE}/es/roofing-guide`,    lastModified: now, priority: 0.8 },
    { url: `${BASE}/es/about`,            lastModified: now, priority: 0.4 },
    { url: `${BASE}/es/how-it-works`,     lastModified: now, priority: 0.4 },
    { url: `${BASE}/es/how-we-rank`,      lastModified: now, priority: 0.5 },
    { url: `${BASE}/es/contact`,          lastModified: now, priority: 0.3 },
    { url: `${BASE}/es/disclosure`,       lastModified: now, priority: 0.2 },
    { url: `${BASE}/es/privacy`,          lastModified: now, priority: 0.2 },
  ]

  // Neighborhood pages — English
  const neighborhoodPages = neighborhoods.map(n => ({
    url: `${BASE}/neighborhoods/${n.slug}`,
    lastModified: now,
    priority: 0.8,
  }))

  // Neighborhood pages — Spanish
  const neighborhoodPagesEs = neighborhoods.map(n => ({
    url: `${BASE}/es/neighborhoods/${n.slug}`,
    lastModified: now,
    priority: 0.7,
  }))

  // Service pages — English
  const servicePages = services.map(s => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    priority: 0.9,
  }))

  // Service pages — Spanish
  const servicePagesEs = services.map(s => ({
    url: `${BASE}/es/services/${s.slug}`,
    lastModified: now,
    priority: 0.8,
  }))

  // Article pages — English
  const articlePages = articles.map(a => ({
    url: `${BASE}/articles/${a.slug}`,
    lastModified: now,
    priority: 0.7,
  }))

  // Article pages — Spanish
  const articlePagesEs = articles.map(a => ({
    url: `${BASE}/es/articles/${a.slug}`,
    lastModified: now,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...staticPagesEs,
    ...neighborhoodPages,
    ...neighborhoodPagesEs,
    ...servicePages,
    ...servicePagesEs,
    ...articlePages,
    ...articlePagesEs,
  ]
}
