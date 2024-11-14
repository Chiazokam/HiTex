import '@mantine/core/styles.layer.css';
import '@mantine/notifications/styles.css'
import "./globals.css"
import { Providers } from '@/app/providers'
import { ColorSchemeScript } from '@mantine/core'
import type { Metadata } from 'next'

import 'cal-sans'

import '@fontsource/inter/100.css'
import '@fontsource/inter/200.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://demos.tiptap.dev'),
  title: 'Tiptap block editor template',
  description:
    'Tiptap is a suite of open source content editing and real-time collaboration tools for developers building apps like Notion or Google Docs.',
  robots: 'noindex, nofollow',
  icons: [{ url: '/favicon.svg' }],
  twitter: {
    card: 'summary_large_image',
    site: '@tiptap_editor',
    creator: '@tiptap_editor',
  },
  openGraph: {
    title: 'Tiptap block editor template',
    description:
      'Tiptap is a suite of open source content editing and real-time collaboration tools for developers building apps like Notion or Google Docs.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full font-sans" lang="en">
      <head><meta name="viewport" content="width=device-width, initial-scale=1.0"/><ColorSchemeScript /></head>
      <body className="flex flex-col h-full">
        <main className="h-full">
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
