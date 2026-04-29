import { Skeleton } from '@/components/ui/skeleton'

export const ProductCardSkeleton = () => {
  return (
    <div className="flex h-full flex-col">
      <Skeleton className="aspect-square w-full rounded-lg" />
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
        <Skeleton className="h-4 w-2/5" />
      </div>
      <Skeleton className="mt-4 h-11 w-full rounded-lg" />
    </div>
  )
}
