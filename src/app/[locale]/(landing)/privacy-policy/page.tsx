'use client'

import { usePrivacyPolicy } from '@/api/api-hooks/policy-and-conditions.api-hook'

const PrivacyPolicy = () => {
  const { data, isLoading, isError } = usePrivacyPolicy()

  return (
    <div className="bg-background min-h-screen px-6 py-20 lg:px-8">
      <div className="px-32">
        <h1 className="text-main-button mb-10 text-center text-7xl leading-none font-normal tracking-normal">
          Privacy Policy
        </h1>

        {isLoading && (
          <p className="text-main-button text-2xl text-center animate-pulse">Loading…</p>
        )}

        {isError && (
          <p className="text-destructive text-2xl text-center">
            Failed to load Privacy Policy. Please try again later.
          </p>
        )}

        {data && (
          <div
            className="text-main-button text-2xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        )}
      </div>
    </div>
  )
}

export default PrivacyPolicy
