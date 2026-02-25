import type { APIRoute } from 'astro'

const siteUrl = 'https://eds-systems.be'

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /unsubscribe',
    `Sitemap: ${siteUrl}/sitemap.xml`,
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
