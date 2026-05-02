'use client'

import { useCategories } from '@/api/api-hooks/category.api-hook'
import { useProducts } from '@/api/api-hooks/product.api-hook'
import {
  DEFAULT_PRODUCT_PAGE_SIZE,
  PRODUCT_SKIN_TYPES,
  type ProductFilters,
  type ProductSkinType,
} from '@/api/query-list/product.query'
import { ProductCard } from '@/components/shared/product-card-main'
import { useTranslations } from 'next-intl'
import { parseAsInteger, useQueryState } from 'nuqs'
import { useDeferredValue, useEffect } from 'react'
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
  const [search, setSearch] = useQueryState('search', { defaultValue: '' })
  const [category, setCategory] = useQueryState('category', parseAsInteger)
  const [skinTypeQuery, setSkinTypeQuery] = useQueryState('skin_type', { defaultValue: 'all' })
  const [minPrice, setMinPrice] = useQueryState('min_price', parseAsInteger)
  const [maxPrice, setMaxPrice] = useQueryState('max_price', parseAsInteger)
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
  const [pageSize] = useQueryState(
    'page_size',
    parseAsInteger.withDefault(DEFAULT_PRODUCT_PAGE_SIZE)
  )

  const deferredSearch = useDeferredValue(search)
  const normalizedSearch = deferredSearch.trim()
  const normalizedPage = page > 0 ? page : 1
  const normalizedPageSize = pageSize > 0 ? pageSize : DEFAULT_PRODUCT_PAGE_SIZE
  const normalizedSkinType = PRODUCT_SKIN_TYPES.includes(skinTypeQuery as ProductSkinType)
    ? (skinTypeQuery as ProductSkinType)
    : 'all'

  const filters: ProductFilters = {
    search: normalizedSearch || undefined,
    category: category ?? undefined,
    skin_type: normalizedSkinType,
    min_price: minPrice ?? undefined,
    max_price: maxPrice ?? undefined,
    page: normalizedPage,
    page_size: normalizedPageSize,
  }

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
  const hasActiveFilters =
    search.trim().length > 0 ||
    category !== null ||
    normalizedSkinType !== 'all' ||
    minPrice !== null ||
    maxPrice !== null

  useEffect(() => {
    if (data && normalizedPage > data.totalPages) {
      void setPage(data.totalPages > 1 ? data.totalPages : null)
    }
  }, [data, normalizedPage, setPage])

  const resetToFirstPage = () => {
    void setPage(null)
  }

  const handleSearchChange = (value: string) => {
    void setSearch(value.trim().length > 0 ? value : null)
    resetToFirstPage()
  }

  const handleCategoryChange = (value: number | null) => {
    void setCategory(value)
    resetToFirstPage()
  }

  const handleSkinTypeChange = (value: ProductSkinType) => {
    void setSkinTypeQuery(value === 'all' ? null : value)
    resetToFirstPage()
  }

  const handleMinPriceChange = (value: number | null) => {
    void setMinPrice(value)
    resetToFirstPage()
  }

  const handleMaxPriceChange = (value: number | null) => {
    void setMaxPrice(value)
    resetToFirstPage()
  }

  const handleClearFilters = () => {
    void setSearch(null)
    void setCategory(null)
    void setSkinTypeQuery(null)
    void setMinPrice(null)
    void setMaxPrice(null)
    void setPage(null)
  }

  const handlePageChange = (nextPage: number) => {
    void setPage(nextPage <= 1 ? null : nextPage)
  }

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
          search={search}
          categoryId={category}
          categories={categories}
          categoriesError={isCategoriesError}
          categoriesLoading={isCategoriesLoading}
          skinType={normalizedSkinType}
          minPrice={minPrice}
          maxPrice={maxPrice}
          hasActiveFilters={hasActiveFilters}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onSkinTypeChange={handleSkinTypeChange}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
          onClearFilters={handleClearFilters}
          onRetryCategories={handleRetryCategories}
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
                  onClick={handleClearFilters}
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
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  )
}

export default ProductsPage
