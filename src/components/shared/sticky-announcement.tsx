'use client'

import { X } from 'lucide-react'
import { useExpiringDismissal } from '@/hooks/use-expiring-dismissal'

export const StickyAnnouncement = () => {
  const { isReady, isDismissed, dismiss } = useExpiringDismissal(
    'sticky-announcement-dismissed',
    24 * 60 * 60 * 1000
  )

  if (!isReady || isDismissed) {
    return null
  }

  return (
    <section className="flex h-11.25 w-full items-center justify-center gap-x-20 bg-black text-[20px] font-normal text-white">
      <h2 className="">Join Glowmi Circle — Early Access to THE CIRCLE</h2>
      <button aria-label="close announcement" onClick={dismiss}>
        <X />
      </button>
    </section>
  )
}
