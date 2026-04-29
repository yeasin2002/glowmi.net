'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AbstractIntlMessages } from 'next-intl'
import { NextIntlClientProvider } from 'next-intl'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__?: QueryClient
  }
}

export const RootWrapper = ({
  children,
  locale,
  messages,
  timeZone,
}: {
  children: React.ReactNode
  locale: string
  messages: AbstractIntlMessages
  timeZone: string
}) => {
  useEffect(() => {
    window.__TANSTACK_QUERY_CLIENT__ = queryClient
  }, [])

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </NextIntlClientProvider>
    </>
  )
}
