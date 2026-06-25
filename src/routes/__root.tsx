import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Purna Chandra Koppisetti | Senior Video Editor' },
      {
        name: 'description',
        content:
          'Dynamic and results-oriented Senior Video Editor with 9+ years of experience in digital media and video production. Specialized in storytelling, post-production, sound mixing, color correction and creating high-quality visual content.',
      },
      {
        name: 'keywords',
        content:
          'video editor, senior video editor, post production, storytelling, Hyderabad, news editing, color correction, sound mixing, Purna Chandra Koppisetti',
      },
      { property: 'og:title', content: 'Purna Chandra Koppisetti | Senior Video Editor' },
      {
        property: 'og:description',
        content:
          'Transforming Stories Into Powerful Visual Experiences. 9+ years of experience in digital media and video production.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Purna Chandra Koppisetti | Senior Video Editor' },
      { name: 'robots', content: 'index, follow' },
    ],
    links: [{ rel: 'icon', href: '/favicon.ico' }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#080808] text-[#f5f5f5] overflow-x-hidden">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
