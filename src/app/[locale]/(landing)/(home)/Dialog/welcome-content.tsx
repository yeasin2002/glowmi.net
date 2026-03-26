'use client'

import { Logo } from '@/components/shared/logo'
import { useTranslations } from 'next-intl'

export const WelcomeContent = () => {
  const t = useTranslations('home.welcomeDialog')
  const messages = [
    t('messagePrimary'),
    t('messageSecondary'),
    t('messageTertiary'),
    t('messageQuaternary'),
  ].filter(Boolean)

  return (
    <div className="relative flex min-h-121 flex-col items-center bg-white px-6 pt-14 pb-12 text-center sm:px-12 sm:pt-16 sm:pb-14">
      <div className="flex w-full max-w-190 flex-col items-center gap-6">
        <Logo className="h-16 w-16" />

        <h2 className="text-primary text-3xl font-semibold sm:text-4xl">{t('title')}</h2>

        <div className="flex flex-col items-center gap-4">
          {messages.map((message, index) => (
            <p
              key={message}
              className={
                index === 0
                  ? 'text-primary text-base leading-relaxed sm:text-lg'
                  : 'text-primary text-sm sm:text-base'
              }
            >
              {message}
            </p>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-4">
          <span className="bg-primary h-px w-28 sm:w-36" />
          <span className="bg-primary h-2.5 w-2.5 rounded-full" />
          <span className="bg-primary h-px w-28 sm:w-36" />
        </div>

        <p className="text-primary text-base sm:text-lg">{t('tagline')}</p>
        {t('thanks') ? <p className="text-primary text-sm sm:text-base">{t('thanks')}</p> : null}
      </div>
    </div>
  )
}
