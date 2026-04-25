import { Toaster } from 'react-hot-toast'

import type { Metadata } from 'next'
import type React from 'react'
import '../../styles/globals.css'

import { DirectionProvider } from '@/components/ui/direction'
import { routing } from '@/i18n/routing'
import { lato } from '@/lib/fonts'
import { hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { RootWrapper } from './root-wrapper'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    return notFound()
  }

  const messages = await getMessages()
  const timeZone = 'Asia/Riyadh'
  const isRTL = locale === 'ar'

  return (
    <html
      lang={locale}
      data-locale={locale}
      // className={isRTL ? 'locale-rtl' : ''}
      suppressHydrationWarning
    >
      <body className={lato.className!}>
        <RootWrapper locale={locale} messages={messages} timeZone={timeZone}>
          <DirectionProvider direction={isRTL ? 'rtl' : 'ltr'}>{children}</DirectionProvider>
        </RootWrapper>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    default: 'GLOWMI - Science with intelligence',
    template: '%s | GLOWMI',
  },
  description:
    'Glowmi blends science and luxury to create intelligent skincare for radiant, healthy skin. Discover the essence of timeless glow.',
  keywords: [
    'skincare',
    'AI skin analysis',
    'personalized skincare',
    'luxury skincare',
    'skin routine',
    'GLOWMI',
    'beauty',
    'cosmetics',
    'Saudi Arabia',
    'KSA',
  ],
  authors: [{ name: 'GLOWMI' }],
  creator: 'GLOWMI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://glowmi.com',
    title: 'GLOWMI - AI-Powered Skincare',
    description:
      'Discover personalized skincare with GLOWMI. AI-powered skin analysis, premium ingredients, and customized routines for your unique skin needs.',
    siteName: 'GLOWMI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GLOWMI - AI-Powered Skincare',
    description:
      'Discover personalized skincare with GLOWMI. AI-powered skin analysis, premium ingredients, and customized routines.',
    creator: '@glowmi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
