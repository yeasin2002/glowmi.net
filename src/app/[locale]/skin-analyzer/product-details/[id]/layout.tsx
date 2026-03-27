import React from 'react'
import CommonNav from '../../../../../components/shared/common-nav'
import { Footer } from '../../../../../components/shared/footer'

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
