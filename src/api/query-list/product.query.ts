import { axiosClient } from '@/lib/axios'

export interface ProductImage {
  id: number
  image: string
}

export interface Product {
  id: number
  category: number
  category_name?: string
  title: string
  sub_title: string
  skin_type: string
  description: string
  key_ingredients: string
  how_to_use: string
  key_benefits: string
  size?: string
  sku: string
  price: string
  discount?: string
  stock?: number
  reserved_stock?: number
  is_available?: boolean
  video?: string
  images: ProductImage[]
  created_at?: string
  updated_at?: string
}

export const productApi = {
  getProducts: () => axiosClient.get<Product[]>('/userapi/products/'),

  getProductById: (id: number | string) => axiosClient.get<Product>(`/userapi/products/${id}/`),
}
