import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://your-portfolio-domain.com' // Replace with actual domain
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/signin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

