import productImage1 from '@/assets/image/product-image-1.png'
import { SiteHeading } from '@/components/shared'
import { getTranslations } from 'next-intl/server'
import { ProductsCarousel, type ProductItem } from './products-list'

export const BestProductsList = async () => {
  const t = await getTranslations('home.bestProducts')

  const products: ProductItem[] = [
    {
      src: productImage1,
      alt: t('products.lipOil.alt'),
      category: t('products.lipOil.category'),
      benefits: t('products.lipOil.benefits'),
      skinType: t('products.lipOil.skinType'),
    },
    {
      src: productImage1,
      alt: t('products.serum.alt'),
      category: t('products.serum.category'),
      benefits: t('products.serum.benefits'),
      skinType: t('products.serum.skinType'),
    },
    {
      src: productImage1,
      alt: t('products.sleepingMask.alt'),
      category: t('products.sleepingMask.category'),
      benefits: t('products.sleepingMask.benefits'),
      skinType: t('products.sleepingMask.skinType'),
    },
    {
      src: productImage1,
      alt: t('products.moisturizer.alt'),
      category: t('products.moisturizer.category'),
      benefits: t('products.moisturizer.benefits'),
      skinType: t('products.moisturizer.skinType'),
    },
    {
      src: productImage1,
      alt: t('products.cleanser.alt'),
      category: t('products.cleanser.category'),
      benefits: t('products.cleanser.benefits'),
      skinType: t('products.cleanser.skinType'),
    },
    {
      src: productImage1,
      alt: t('products.eyeCream.alt'),
      category: t('products.eyeCream.category'),
      benefits: t('products.eyeCream.benefits'),
      skinType: t('products.eyeCream.skinType'),
    },
  ]
  return (
    <section className="overflow-x-hidden py-10">
      <SiteHeading heading={t('title')} />

      <div className="relative w-full py-8">
        <ProductsCarousel products={products} loop={true} viewDetailsLabel={t('viewDetails')} />
      </div>
    </section>
  )
}
