'use client'

import { useCallback, useEffect, useState } from 'react'

type UseExpiringDismissalReturn = {
  isReady: boolean
  isDismissed: boolean
  dismiss: () => void
  reset: () => void
}

type ExpiringDismissalValue = {
  expiresAt: number
}

export function useExpiringDismissal(
  key: string,
  ttlMs: number
): UseExpiringDismissalReturn {
  const [isReady, setIsReady] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const rawValue = window.localStorage.getItem(key)

      if (!rawValue) {
        setIsDismissed(false)
        return
      }

      const value = JSON.parse(rawValue) as ExpiringDismissalValue
      const isExpired = Date.now() >= value.expiresAt

      if (isExpired) {
        window.localStorage.removeItem(key)
        setIsDismissed(false)
        return
      }

      setIsDismissed(true)
    } catch {
      setIsDismissed(false)
    } finally {
      setIsReady(true)
    }
  }, [key])

  const dismiss = useCallback(() => {
    if (typeof window === 'undefined') return

    const value: ExpiringDismissalValue = {
      expiresAt: Date.now() + ttlMs,
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setIsDismissed(true)
    } catch {
      // no-op: keep UI functional even if storage is unavailable
    }
  }, [key, ttlMs])

  const reset = useCallback(() => {
    if (typeof window === 'undefined') return

    try {
      window.localStorage.removeItem(key)
      setIsDismissed(false)
    } catch {
      // no-op
    }
  }, [key])

  return { isReady, isDismissed, dismiss, reset }
}
