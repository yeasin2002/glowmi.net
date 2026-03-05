import logoCompact from '@/assets/icons/logo/logo-mini-dark.svg'

import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../../../lib/utils'

export default async function ComingSoonPage() {
  const t = await getTranslations('comingSoon')

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f4f3] px-4 py-16">
      <div className="flex max-w-2xl flex-col items-center text-center">
        {/* Logo */}
        <Link className="mb-12" href={'/'}>
          <Image
            src={logoCompact}
            alt="Glowmi Logo"
            width={80}
            height={80}
            className="h-20 w-20"
            priority
          />
        </Link>

        {/* Title */}
        <h1 className={cn('text-primary mb-8 text-4xl font-normal', 'md:text-5xl lg:text-6xl')}>
          {t('title')}
        </h1>

        {/* Subtitle */}
        <h2 className="text-primary mb-6 text-xl font-normal md:text-2xl lg:text-3xl">
          {t('subtitle')}
        </h2>

        {/* Description */}
        <p className="text-primary! mb-12 max-w-xl text-base leading-relaxed md:text-lg">
          {t('description')}
        </p>

        {/* Decorative Divider */}
        <div className="mb-8 flex items-center gap-3">
          <div className="bg-primary/20 h-px w-24" />
          <div className="bg-primary h-2 w-2 rounded-full" />
          <div className="bg-primary/20 h-px w-24" />
        </div>

        {/* Bottom Tagline */}
        <p className="text-primary/70 text-sm md:text-base">{t('tagline')}</p>
      </div>
    </div>
  )
}
