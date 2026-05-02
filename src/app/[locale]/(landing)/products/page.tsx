'use client'

import { useProducts } from '@/api/api-hooks/product.api-hook'
import { ProductCard } from '@/components/shared/product-card-main'
import { useTranslations } from 'next-intl'
import { parseAsInteger, useQueryState } from 'nuqs'
import { ProductFilterSort } from './product-filter-sort'
import { ProductCardSkeleton } from './product-page-skeleton'
import { ProductPagination } from './product-pagination'

const ProductsGridSkeleton = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  )
}

const ProductsPage = () => {
  const t = useTranslations('productsPage')
  const { data, error, isLoading } = useProducts()
  const [min_price, setMin_price] = useQueryState('min_price', parseAsInteger)

  /*  
  Product and filters
  /productapi/user/products/?page=1&page_size=3
   /productapi/user/products/?category=1"
  /productapi/user/products/?skin_type=all"
  /productapi/user/products/?min_price=30"
  /productapi/user/products/?max_price=40"
  /productapi/user/products/?min_price=30&max_price=40"
  /productapi/user/products/?search=Serum&category=1&min_price=30&max_price=50&page=1&page_size=5"
  */
  const products = data?.data ?? []

  return (
    <div className="bg-background min-h-screen text-[#363739]">
      <main className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-3">
          <p className="text-main-primary-base_medium text-sm font-medium tracking-wide">
            {t('eyebrow')}
          </p>
          <h1 className="text-3xl font-normal sm:text-4xl">{t('title')}</h1>
          <p className="max-w-2xl text-sm leading-6 text-[#666666]">{t('description')}</p>
        </div>

        <ProductFilterSort />

        <section className="mt-8">
          {isLoading ? (
            <ProductsGridSkeleton />
          ) : error ? (
            <div className="rounded-2xl border border-[#e5e5e5] bg-white px-6 py-10 text-center shadow-sm">
              <h2 className="text-lg font-normal text-[#363739]">{t('states.errorTitle')}</h2>
              <p className="mt-2 text-sm leading-6 text-[#666666]">
                {t('states.errorDescription')}
              </p>
            </div>
          ) : products.length === 0 ? (
            <div className="rounded-2xl border border-[#e5e5e5] bg-white px-6 py-10 text-center shadow-sm">
              <h2 className="text-lg font-normal text-[#363739]">{t('states.emptyTitle')}</h2>
              <p className="mt-2 text-sm leading-6 text-[#666666]">
                {t('states.emptyDescription')}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-2xl border border-[#e5e5e5] bg-white p-4 shadow-sm"
                >
                  <ProductCard product={product} viewDetailsLabel={t('viewDetails')} />
                </div>
              ))}
            </div>
          )}
        </section>

        <ProductPagination />
      </main>
    </div>
  )
}

export default ProductsPage
