import type { APIRoute } from 'astro'

const siteUrl = 'https://eds-systems.be'
const routes = ['/']

export const GET: APIRoute = () => {
  const lastModified = new Date().toISOString()
  const urls = routes
    .map(
      route => `<url><loc>${siteUrl}${route}</loc><lastmod>${lastModified}</lastmod></url>`,
    )
    .join('')

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
