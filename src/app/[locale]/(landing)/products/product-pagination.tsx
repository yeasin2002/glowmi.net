import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ProductPaginationProps {
  count: number
  onPageChange: (page: number) => void
  page: number
  pageSize: number
  totalPages: number
}

export const ProductPagination = ({
  count,
  onPageChange,
  page,
  pageSize,
  totalPages,
}: ProductPaginationProps) => {
  const t = useTranslations('productsPage')

  if (count === 0) {
    return null
  }

  const safePage = Math.min(Math.max(page, 1), Math.max(totalPages, 1))
  const from = (safePage - 1) * pageSize + 1
  const to = Math.min(safePage * pageSize, count)
  const isPreviousDisabled = safePage <= 1
  const isNextDisabled = safePage >= totalPages

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-col gap-4 border-t border-[#e5e5e5] pt-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-sm text-[#666666]">{t('pagination.summary', { count, from, to })}</p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={isPreviousDisabled}
          onClick={() => {
            if (!isPreviousDisabled) {
              onPageChange(safePage - 1)
            }
          }}
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#e5e5e5] px-4 text-sm text-[#363739] transition hover:bg-[#f5f4f3] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
        >
          <ChevronLeft className="size-4" />
          {t('pagination.previous')}
        </button>

        <button
          type="button"
          aria-current="page"
          className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-[#1a2e1a] bg-[#1a2e1a] px-3 text-sm text-white"
        >
          {t('pagination.page', { page: safePage, totalPages })}
        </button>

        <button
          type="button"
          disabled={isNextDisabled}
          onClick={() => {
            if (!isNextDisabled) {
              onPageChange(safePage + 1)
            }
          }}
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#e5e5e5] px-4 text-sm text-[#363739] transition hover:bg-[#f5f4f3] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
        >
          {t('pagination.next')}
          <ChevronRight className="size-4" />
        </button>
      </div>
    </nav>
  )
}
