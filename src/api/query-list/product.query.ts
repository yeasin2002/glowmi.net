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
  skin_type?: string | null
  description: string
  key_ingredients: string
  how_to_use: string
  key_benefits: string
  size?: string
  sku?: string
  price: string
  discount?: string
  stock?: number
  reserved_stock?: number
  is_available?: boolean
  video?: string
  images: ProductImage[]
  order_count?: number
  created_at?: string
  updated_at?: string
}

export interface ProductsResponse {
  success: boolean
  message: string
  data: Product[]
}

export interface SingleProductsResponse {
  success: boolean
  message: string
  data: Product
}

export const productApi = {
  // Existing — user-scoped via /userapi/
  getProducts: () => axiosClient.get<ProductsResponse>('/userapi/products/'),

  getProductById: (id: number | string) => axiosClient.get<Product>(`/userapi/products/${id}/`),

  // Best products — sorted by order_count desc
  getBestProducts: () => axiosClient.get<ProductsResponse>('/productapi/products/best/'),

  // User-scoped via /productapi/products/user/
  getUserProducts: () => axiosClient.get<ProductsResponse>('/productapi/products/user/'),

  getUserProductById: (id: number | string) =>
    axiosClient.get<SingleProductsResponse>(`/productapi/products/user/${id}/`),
}
