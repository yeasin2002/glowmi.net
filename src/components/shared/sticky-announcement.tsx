'use client'

import { useExpiringDismissal } from '@/hooks/use-expiring-dismissal'
import { useMembershipModalStore } from '@/store/membership-modal.store'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const StickyAnnouncement = () => {
  const t = useTranslations('home.JoinGlowmiCircle')
  const openFromAnnouncement = useMembershipModalStore((state) => state.openFromAnnouncement)
  const { isReady, isDismissed, dismiss } = useExpiringDismissal(
    'sticky-announcement-dismissed',
    24 * 60 * 60 * 1000
  )

  if (!isReady || isDismissed) return null

  return (
    <section className="flex h-11.25 w-full items-center justify-center gap-x-8 bg-black text-[20px] font-normal text-white *:cursor-pointer md:gap-x-20">
      <button
        type="button"
        onClick={openFromAnnouncement}
        className="text-[15px] underline-offset-1 hover:underline focus:underline focus:outline-none lg:text-[20px]"
      >
        {t('title')}
      </button>

      <button aria-label="close announcement" onClick={dismiss}>
        <X className="size-5" />
      </button>
    </section>
  )
}
