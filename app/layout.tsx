import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Supabase Template',
  description: 'Template for Next.js projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          fetchPriority="high"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@1&f[]=jet-brains-mono@1&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  )
}
