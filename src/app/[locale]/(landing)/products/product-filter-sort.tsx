import type { Category } from '@/api/query-list/category.query'
import type { ProductSkinType } from '@/api/query-list/product.query'
import { Search, SlidersHorizontal } from 'lucide-react'
import { useTranslations } from 'next-intl'

const SKIN_TYPE_OPTIONS: ProductSkinType[] = [
  'all',
  'oily',
  'dry',
  'normal',
  'combination',
  'sensitive',
]

interface ProductFilterSortProps {
  categories: Category[]
  categoriesError: boolean
  categoryId: number | null
  categoriesLoading: boolean
  hasActiveFilters: boolean
  maxPrice: number | null
  minPrice: number | null
  onCategoryChange: (value: number | null) => void
  onClearFilters: () => void
  onMaxPriceChange: (value: number | null) => void
  onMinPriceChange: (value: number | null) => void
  onRetryCategories: () => void
  onSearchChange: (value: string) => void
  onSkinTypeChange: (value: ProductSkinType) => void
  search: string
  skinType: ProductSkinType
}

export const ProductFilterSort = ({
  categories,
  categoriesError,
  categoryId,
  categoriesLoading,
  hasActiveFilters,
  maxPrice,
  minPrice,
  onCategoryChange,
  onClearFilters,
  onMaxPriceChange,
  onMinPriceChange,
  onRetryCategories,
  onSearchChange,
  onSkinTypeChange,
  search,
  skinType,
}: ProductFilterSortProps) => {
  const t = useTranslations('productsPage')

  return (
    <section className="rounded-2xl border border-[#e5e5e5] bg-white p-4 shadow-sm sm:p-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,0.7fr))]">
        <label className="block">
          <span className="mb-2 block text-sm text-[#666666]">{t('filters.searchLabel')}</span>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#666666]"
            />
            <input
              aria-label={t('filters.searchLabel')}
              value={search}
              onChange={(event) => {
                onSearchChange(event.target.value)
              }}
              type="search"
              placeholder={t('filters.searchPlaceholder')}
              className="h-12 w-full rounded-lg border border-[#e5e5e5] bg-white pr-4 pl-11 text-sm text-[#363739] transition outline-none focus:border-[#1a2e1a] focus:ring-2 focus:ring-[#1a2e1a]/15"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-[#666666]">{t('filters.categoryLabel')}</span>
          <div className="relative">
            <SlidersHorizontal
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#666666]"
            />
            <select
              aria-label={t('filters.categoryLabel')}
              value={categoryId === null ? 'all' : categoryId.toString()}
              disabled={categoriesLoading || categoriesError}
              onChange={(event) => {
                const nextValue = event.target.value
                onCategoryChange(nextValue === 'all' ? null : Number(nextValue))
              }}
              className="h-12 w-full appearance-none rounded-lg border border-[#e5e5e5] bg-white pr-4 pl-11 text-sm text-[#363739] transition outline-none focus:border-[#1a2e1a] focus:ring-2 focus:ring-[#1a2e1a]/15"
            >
              <option value="all">{t('filters.categoryAll')}</option>
              {categoriesError ? (
                <option value="error" disabled>
                  {t('filters.categoryUnavailable')}
                </option>
              ) : null}
              {categoriesLoading ? (
                <option value="loading" disabled>
                  {t('filters.categoryLoading')}
                </option>
              ) : null}
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          {categoriesError ? (
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-xs text-[#8a5a24]">{t('filters.categoryError')}</p>
              <button
                type="button"
                onClick={onRetryCategories}
                className="text-xs font-medium text-[#1a2e1a] underline underline-offset-2"
              >
                {t('actions.retry')}
              </button>
            </div>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-[#666666]">{t('filters.skinTypeLabel')}</span>
          <select
            aria-label={t('filters.skinTypeLabel')}
            value={skinType}
            onChange={(event) => {
              onSkinTypeChange(event.target.value as ProductSkinType)
            }}
            className="h-12 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 text-sm text-[#363739] transition outline-none focus:border-[#1a2e1a] focus:ring-2 focus:ring-[#1a2e1a]/15"
          >
            {SKIN_TYPE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {t(`filters.skinTypes.${option}`)}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-[#666666]">{t('filters.minPriceLabel')}</span>
          <input
            aria-label={t('filters.minPriceLabel')}
            value={minPrice ?? ''}
            onChange={(event) => {
              const value = event.target.value
              onMinPriceChange(value ? Number(value) : null)
            }}
            type="number"
            min={0}
            inputMode="numeric"
            placeholder={t('filters.pricePlaceholder')}
            className="h-12 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 text-sm text-[#363739] transition outline-none focus:border-[#1a2e1a] focus:ring-2 focus:ring-[#1a2e1a]/15"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-[#666666]">{t('filters.maxPriceLabel')}</span>
          <input
            aria-label={t('filters.maxPriceLabel')}
            value={maxPrice ?? ''}
            onChange={(event) => {
              const value = event.target.value
              onMaxPriceChange(value ? Number(value) : null)
            }}
            type="number"
            min={0}
            inputMode="numeric"
            placeholder={t('filters.pricePlaceholder')}
            className="h-12 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 text-sm text-[#363739] transition outline-none focus:border-[#1a2e1a] focus:ring-2 focus:ring-[#1a2e1a]/15"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-col gap-3 border-t border-[#f0efed] pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#666666]">{t('filters.hint')}</p>

        <button
          type="button"
          disabled={!hasActiveFilters}
          onClick={onClearFilters}
          className="inline-flex h-10 items-center justify-center rounded-lg border border-[#1a2e1a] px-4 text-sm font-medium text-[#1a2e1a] transition hover:bg-[#1a2e1a] hover:text-white disabled:cursor-not-allowed disabled:border-[#d8d8d8] disabled:text-[#a0a0a0] disabled:hover:bg-transparent disabled:hover:text-[#a0a0a0]"
        >
          {t('filters.clear')}
        </button>
      </div>
    </section>
  )
}
