'use client'

import { useCategories } from '@/api/api-hooks/category.api-hook'
import { useProducts } from '@/api/api-hooks/product.api-hook'
import { ProductCard } from '@/components/shared/product-card-main'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { ProductFilterSort, useProductFilterSortState } from './product-filter-sort'
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
  const {
    filters,
    hasActiveFilters,
    normalizedPage,
    normalizedPageSize,
    setPage,
    clearFilters,
    pageChange,
    filterSortProps,
  } = useProductFilterSortState()

  const { data, error, isLoading, isFetching, refetch: refetchProducts } = useProducts(filters)
  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    refetch: refetchCategories,
  } = useCategories()

  const products = Array.isArray(data?.items) ? data.items : []
  const totalCount = data?.count ?? 0
  const totalPages = data?.totalPages ?? 1

  useEffect(() => {
    if (data && normalizedPage > data.totalPages) {
      void setPage(data.totalPages > 1 ? data.totalPages : null)
    }
  }, [data, normalizedPage, setPage])

  const handleRetryProducts = () => {
    void refetchProducts()
  }

  const handleRetryCategories = () => {
    void refetchCategories()
  }

  return (
    <div className="bg-background min-h-screen text-[#363739]">
      <main className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-3">
          <p className="text-main-primary-base_medium text-sm font-medium tracking-wide">
            {t('eyebrow')}
          </p>
          <h1 className="text-3xl font-normal sm:text-4xl">{t('title')}</h1>
          <p className="max-w-2xl text-sm leading-6 text-[#666666]">{t('description')}</p>
          {isFetching && !isLoading ? (
            <p className="text-xs tracking-wide text-[#8a8a8a]">{t('states.updating')}</p>
          ) : null}
        </div>

        <ProductFilterSort
          categories={categories}
          categoriesError={isCategoriesError}
          categoriesLoading={isCategoriesLoading}
          onRetryCategories={handleRetryCategories}
          {...filterSortProps}
        />

        <section className="mt-8">
          {isLoading ? (
            <ProductsGridSkeleton />
          ) : error ? (
            <div className="rounded-2xl border border-[#e5e5e5] bg-white px-6 py-10 text-center shadow-sm">
              <h2 className="text-lg font-normal text-[#363739]">{t('states.errorTitle')}</h2>
              <p className="mt-2 text-sm leading-6 text-[#666666]">
                {t('states.errorDescription')}
              </p>
              <button
                type="button"
                onClick={handleRetryProducts}
                disabled={isFetching}
                className="mt-5 inline-flex h-11 items-center justify-center rounded-lg border border-[#1a2e1a] px-5 text-sm font-medium text-[#1a2e1a] transition hover:bg-[#1a2e1a] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#1a2e1a]"
              >
                {t('actions.retry')}
              </button>
            </div>
          ) : products.length === 0 ? (
            <div className="rounded-2xl border border-[#e5e5e5] bg-white px-6 py-10 text-center shadow-sm">
              <h2 className="text-lg font-normal text-[#363739]">{t('states.emptyTitle')}</h2>
              <p className="mt-2 text-sm leading-6 text-[#666666]">
                {t('states.emptyDescription')}
              </p>
              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 inline-flex h-11 items-center justify-center rounded-lg border border-[#1a2e1a] px-5 text-sm font-medium text-[#1a2e1a] transition hover:bg-[#1a2e1a] hover:text-white"
                >
                  {t('filters.clear')}
                </button>
              ) : null}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products?.map((product) => (
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

        <ProductPagination
          count={totalCount}
          page={normalizedPage}
          pageSize={normalizedPageSize}
          totalPages={totalPages}
          onPageChange={pageChange}
        />
      </main>
    </div>
  )
}

export default ProductsPage
