import { axiosClient } from '@/lib/axios'

export type ShopSkinType = 'oily' | 'dry' | 'normal' | 'combination' | 'sensitive'

export type CheckoutPaymentBrand = 'VISA' | 'MASTER' | 'MADA' | 'APPLEPAY' | 'TABBY' | 'TAMARA'

export interface ShopProductImage {
  id?: number
  image?: string
}

export interface ShopProduct {
  id?: number
  category: number
  category_name?: string
  title: string
  sub_title?: string
  skin_type?: ShopSkinType | null
  description?: string
  key_ingredients?: string
  how_to_use?: string
  key_benefits?: string
  size?: string
  price: string
  discount?: string
  stock?: number
  images?: ShopProductImage[]
  order_count?: number
  created_at?: string
  updated_at?: string
}

export interface CartItem {
  id?: number
  product?: ShopProduct | null
  product_id: number
  quantity?: number
  subtotal?: string
}

export interface Cart {
  id?: number
  items?: CartItem[]
  total_price?: string
  updated_at?: string
}

export interface ShopResponse<T> {
  success: boolean
  message: string
  data: T
}

export interface AddCartItemRequestData {
  product_id: number
  quantity?: number
}

export interface UpdateCartItemRequestData {
  quantity: number
}

export interface CheckoutInitiateRequestData {
  address_line1: string
  city: string
  email: string
  first_name: string
  last_name: string
  payment_brand: CheckoutPaymentBrand
  phone: string
  postal_code: string
  address_line2?: string
  country?: string
  state?: string
}

export type CheckoutInitiateResponseData = CheckoutInitiateRequestData

const getCartEndpoint = (itemId?: number | string) => {
  if (itemId === undefined) {
    return '/shop/cart/'
  }

  return `/shop/cart/items/${itemId}/`
}

export const shopApi = {
  getCart: (itemId?: number | string) => axiosClient.get<ShopResponse<Cart>>(getCartEndpoint(itemId)),

  addCartItem: (data: AddCartItemRequestData, itemId?: number | string) =>
    axiosClient.post<ShopResponse<CartItem>>(getCartEndpoint(itemId), data),

  updateCartItem: (data: UpdateCartItemRequestData, itemId?: number | string) =>
    axiosClient.patch<ShopResponse<CartItem>>(getCartEndpoint(itemId), data),

  removeCartItem: (itemId?: number | string) => axiosClient.delete<void>(getCartEndpoint(itemId)),

  initiateCheckout: (data: CheckoutInitiateRequestData) =>
    axiosClient.post<ShopResponse<CheckoutInitiateResponseData>>('/shop/checkout/initiate/', data),
}
