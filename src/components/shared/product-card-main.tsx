import { Product } from '@/api/query-list/product.query'
import notImage from '@/assets/image/no-image-placeholder.svg'
import Image from 'next/image'
import Link from 'next/link'

interface Props extends React.ComponentProps<'div'> {
  product: Product
  viewDetailsLabel: string
}

export const ProductCard = ({ product, viewDetailsLabel }: Props) => {
  return (
    <div className="flex h-full flex-col">
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={product.images[0].image || notImage}
          alt={`Image of ${product.title}`}
          fill
          className="object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 flex grow flex-col">
        <p className="text-sm leading-relaxed text-gray-700">{product.key_benefits}</p>
        <p className="mt-2 text-sm text-gray-500">{product.skin_type}</p>
      </div>

      {/* View Details Button */}
      <Link
        href={`/skin-analyzer/product-details/${product.id}`}
        className="mt-4 w-full rounded-lg border border-[#1a2e1a] bg-transparent py-3 text-center text-sm font-medium text-[#1a2e1a] transition-colors hover:bg-[#1a2e1a] hover:text-white"
        onKeyDown={(e) => e.key === 'Enter' && console.log('View details')}
      >
        {viewDetailsLabel}
      </Link>
    </div>
  )
}
