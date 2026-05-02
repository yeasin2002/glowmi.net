import {
  normalizeProductsResponse,
  productApi,
  type Product,
} from '@/api/query-list/product.query'
import { SiteHeading } from '@/components/shared'
import { getTranslations } from 'next-intl/server'
import { ProductsCarousel } from './products-list'

export const BestProductsList = async () => {
  const t = await getTranslations('home')
  let products: Product[] = []

  try {
    const { data } = await productApi.getBestProducts()
    products = normalizeProductsResponse(data).items
  } catch (error) {
    console.error('Failed to load best products:', error)
  }

  return (
    <section className="overflow-x-hidden py-10">
      <SiteHeading heading={t('bestProducts.title')} />

      <div className="relative w-full py-8">
        {products.length > 0 ? (
          <ProductsCarousel
            products={products}
            loop={true}
            viewDetailsLabel={t('bestProducts.viewDetails')}
          />
        ) : (
          <p className="mx-auto max-w-2xl px-4 text-center text-sm leading-6 text-[#363739]">
            {t('bestProducts.emptyState')}
          </p>
        )}
      </div>
    </section>
  )
}
