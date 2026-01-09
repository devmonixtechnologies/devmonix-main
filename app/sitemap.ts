import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_DOMAIN 
    ? `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}` 
    : 'https://devmonix.io'

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/careers',
    '/faq',
    '/ai-chat',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : 0.8,
  }))
}
