'use client'

import { useTermsAndConditions } from '@/api/api-hooks/policy-and-conditions.api-hook'

const TermsConditions = () => {
  const { data, isLoading, isError } = useTermsAndConditions()

  return (
    <div className="bg-background min-h-screen px-6 py-20 lg:px-8">
      <div className="px-32">
        <h1 className="text-main-button mb-10 text-center text-7xl leading-none font-normal tracking-normal">
          Terms &amp; Conditions
        </h1>

        {isLoading && (
          <p className="text-main-button animate-pulse text-center text-2xl">Loading…</p>
        )}

        {isError && (
          <p className="text-destructive text-center text-2xl">
            Failed to load Terms &amp; Conditions. Please try again later.
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

export default TermsConditions
