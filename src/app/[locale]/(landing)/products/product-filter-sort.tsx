import { Search, SlidersHorizontal } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const ProductFilterSort = () => {
  const t = useTranslations('productsPage')
  return (
    <section className="rounded-2xl border border-[#e5e5e5] bg-white p-4 shadow-sm sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(220px,0.6fr)_minmax(220px,0.6fr)]">
        <label className="block">
          <span className="mb-2 block text-sm text-[#666666]">{t('filters.searchLabel')}</span>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#666666]"
            />
            <input
              aria-label={t('filters.searchLabel')}
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
              defaultValue="all"
              className="h-12 w-full appearance-none rounded-lg border border-[#e5e5e5] bg-white pr-4 pl-11 text-sm text-[#363739] transition outline-none focus:border-[#1a2e1a] focus:ring-2 focus:ring-[#1a2e1a]/15"
            >
              <option value="all">{t('filters.categoryAll')}</option>
            </select>
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-[#666666]">{t('filters.sortLabel')}</span>
          <select
            aria-label={t('filters.sortLabel')}
            defaultValue="featured"
            className="h-12 w-full rounded-lg border border-[#e5e5e5] bg-white px-4 text-sm text-[#363739] transition outline-none focus:border-[#1a2e1a] focus:ring-2 focus:ring-[#1a2e1a]/15"
          >
            <option value="featured">{t('filters.sortDefault')}</option>
          </select>
        </label>
      </div>
    </section>
  )
}
