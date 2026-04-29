import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const ProductPagination = () => {
  const t = useTranslations('productsPage')
  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-col gap-4 border-t border-[#e5e5e5] pt-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-sm text-[#666666]">{t('pagination.summary', { count: 5 })}</p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#e5e5e5] px-4 text-sm text-[#363739] transition hover:bg-[#f5f4f3]"
        >
          <ChevronLeft className="size-4" />
          {t('pagination.previous')}
        </button>

        <button
          type="button"
          className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-[#1a2e1a] bg-[#1a2e1a] px-3 text-sm text-white"
        >
          {t('pagination.page', { page: 1 })}
        </button>

        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#e5e5e5] px-4 text-sm text-[#363739] transition hover:bg-[#f5f4f3]"
        >
          {t('pagination.next')}
          <ChevronRight className="size-4" />
        </button>
      </div>
    </nav>
  )
}
