import { StickyAnnouncement } from '@/components/shared'
import { NewFooter } from '@/components/shared/new-footer'
import { NewNav } from '@/components/shared/new-nav'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NewNav />
      <StickyAnnouncement />
      {children}
      <NewFooter />
    </>
  )
}

export default AuthLayout
