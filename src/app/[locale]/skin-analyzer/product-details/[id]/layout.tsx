import { CommonNav, Footer } from '@/components/shared'
import React from 'react'

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CommonNav />
      {children}
      <Footer className="mt-20! px-20!" />
    </>
  )
}

export default ProductDetailsLayout
