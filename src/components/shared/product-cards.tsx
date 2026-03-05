'use client'

import { Button, buttonVariants } from '@/components/ui'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '../../i18n/navigation'

export type Product = {
  id: number
  category: string
  name: string
  price: string
  image: string
}

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const t = useTranslations('productDetails')

  return (
    <div className="flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-[#e8e6e3]">
        {/* Category Badge */}
        <span className="bg-primary absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-xs text-white">
          {product.category}
        </span>

        {/* Product Image */}
        <Image src={product.image} alt={product.name} fill className="object-cover" />

        {/* Buttons Overlay */}
        <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-1 p-3">
          <Button variant="outline" className="bg-background/20 border-black">
            {t('addToCart')}
          </Button>
          <Link
            href={'/skin-analyzer/product-details/1234'}
            className={buttonVariants({
              className:
                'bg-primary! hover:bg-primary/90 w-full rounded-md py-2 text-sm text-white',
            })}
            style={{ background: 'black' }}
          >
            {t('viewDetails')}
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-3">
        <p className="text-primary text-sm font-medium">{product.price}</p>
        <p className="text-main-button text-sm">{product.name}</p>
      </div>
    </div>
  )
}
