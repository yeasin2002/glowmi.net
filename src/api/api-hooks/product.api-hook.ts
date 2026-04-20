import { useQuery } from '@tanstack/react-query'
import { productApi } from '../query-list/product.query'

const PRODUCT_KEYS = {
  all: () => ['products'] as const,
  lists: () => ['products', 'list'] as const,
  detail: (id: number | string) => ['products', 'detail', id] as const,
}

export const useProducts = () => {
  return useQuery({
    queryKey: PRODUCT_KEYS.lists(),
    queryFn: () => productApi.getProducts(),
    select: (response) => response.data,
  })
}

export const useProduct = (id?: number | string) => {
  return useQuery({
    queryKey: PRODUCT_KEYS.detail(id ?? 'unknown'),
    queryFn: async () => {
      if (id === undefined) {
        throw new Error('Product id is required')
      }

      return productApi.getProductById(id)
    },
    enabled: id !== undefined,
    select: (response) => response.data,
  })
}
