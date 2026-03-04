import heroBgForMobile from '@/assets/image/new-coming-soon-mobile.jpg'
import heroBg from '@/assets/image/new-coming-soon.png'
import { cn } from '@/lib/utils'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {} & React.ComponentPropsWithRef<'section'>

export const NewComingSoonHero = ({ className, ...props }: Props) => {
  const t = useTranslations('home.hero')
  return (
    <section
      className={cn('relative flex min-h-61.25 w-full items-center md:min-h-[120vh]', className)}
      {...props}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBgForMobile}
          alt="Coming Soon Hero"
          fill
          className="min-h-full md:hidden"
          priority
          quality={100}
        />

        <Image
          src={heroBg}
          alt="Coming Soon Hero"
          fill
          className="hidden h-full min-h-207.25 object-cover md:block"
          priority
          quality={90}
        />
      </div>

      <div
        className={cn(
          'z-10 mt-24 flex w-full flex-col items-end gap-2 pr-3',
          'md:mt-0 md:mr-20 md:ml-auto md:w-xl md:items-center md:px-0'
        )}
      >
        <div className={cn('flex flex-col items-center justify-center gap-2', 'md:gap-4')}>
          <h1 className={cn('text-primary text-sm font-normal', 'md:text-4xl')}>{t('title')}</h1>

          <Link
            href={'/coming-soon'}
            className={cn(
              'bg-primary cursor-pointer rounded-lg! px-6 py-1 text-xs text-white',
              'md:px-12 md:py-3 md:text-lg'
            )}
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
