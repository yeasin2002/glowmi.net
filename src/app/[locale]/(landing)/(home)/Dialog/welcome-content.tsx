'use client'

import logoImg from '@/assets/icons/logo/logo-mini-dark.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const WelcomeContent = () => {
  const t = useTranslations('home.welcomeDialog')

  return (
    <div className="relative flex min-h-121 flex-col items-center bg-white px-6 pt-14 pb-12 text-center sm:px-12 sm:pt-16 sm:pb-14">
      <div className="flex w-full max-w-190 flex-col items-center gap-6">
        <Image
          src={logoImg}
          alt={t('logoAlt')}
          width={64}
          height={64}
          className="h-16 w-16"
          priority
        />

        <h2 className="text-primary text-3xl font-semibold sm:text-4xl">{t('title')}</h2>

        <div className="flex flex-col items-center gap-4">
          <p className="text-primary/80 text-base leading-relaxed sm:text-lg">
            {t('messagePrimary')}
          </p>
          <p className="text-primary/70 text-sm sm:text-base">{t('messageSecondary')}</p>
          <p className="text-primary/70 text-sm sm:text-base">{t('messageTertiary')}</p>
          <p className="text-primary/70 text-sm sm:text-base">{t('messageQuaternary')}</p>
        </div>

        <div className="mt-2 flex items-center gap-4">
          <span className="h-px w-28 bg-black/30 sm:w-36" />
          <span className="h-2.5 w-2.5 rounded-full bg-black" />
          <span className="h-px w-28 bg-black/30 sm:w-36" />
        </div>

        <p className="text-primary text-base sm:text-lg">{t('tagline')}</p>
        <p className="text-primary/70 text-sm sm:text-base">{t('thanks')}</p>
      </div>
    </div>
  )
}
