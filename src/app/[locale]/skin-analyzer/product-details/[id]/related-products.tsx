import { SiteHeading } from '@/components/shared'
import { ProductCard } from '@/components/shared/product-cards'
import { products } from '@/data/products.data'
import { getTranslations } from 'next-intl/server'

export const RelatedProductsFromProductDetails = async () => {
  const t = await getTranslations('productDetails')

  return (
    <div className="mx-auto mt-8 max-w-5xl px-6">
      <SiteHeading heading={t('relatedProducts')} showWave />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
