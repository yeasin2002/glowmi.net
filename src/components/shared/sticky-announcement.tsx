'use client'

import { useExpiringDismissal } from '@/hooks/use-expiring-dismissal'
import { useMembershipModalStore } from '@/store/membership-modal.store'
import { X } from 'lucide-react'

export const StickyAnnouncement = () => {
  const openFromAnnouncement = useMembershipModalStore((state) => state.openFromAnnouncement)
  const { isReady, isDismissed, dismiss } = useExpiringDismissal(
    'sticky-announcement-dismissed',
    24 * 60 * 60 * 1000
  )

  if (!isReady || isDismissed) {
    return null
  }

  return (
    <section className="flex h-11.25 w-full items-center justify-center gap-x-20 bg-black text-[20px] font-normal text-white *:cursor-pointer">
      <button
        type="button"
        onClick={openFromAnnouncement}
        className="text-[20px] underline-offset-1 hover:underline focus:underline focus:outline-none"
      >
        Join Glowmi Circle — Early Access to THE CIRCLE
      </button>

      <button aria-label="close announcement" onClick={dismiss}>
        <X />
      </button>
    </section>
  )
}
