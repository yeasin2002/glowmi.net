'use client'

import { useExpiringDismissal } from '@/hooks/use-expiring-dismissal'
import { useMembershipModalStore } from '@/store/membership-modal.store'
import { useTranslations } from 'next-intl'

export const StickyAnnouncement = () => {
  const t = useTranslations('home.JoinGlowmiCircle')
  const openFromAnnouncement = useMembershipModalStore((state) => state.openFromAnnouncement)
  const { isReady, isDismissed } = useExpiringDismissal(
    'sticky-announcement-dismissed',
    24 * 60 * 60 * 1000
  )

  if (!isReady || isDismissed) return null

  return (
    <section className="px-20 py-6">
      <button
        type="button"
        onClick={openFromAnnouncement}
        className="cursor-pointer rounded-full border border-black px-6 py-1 text-[20px] underline-offset-1 hover:underline focus:underline focus:outline-none lg:text-[20px]"
      >
        {t('title')}
      </button>
    </section>
  )
}
