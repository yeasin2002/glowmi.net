import { axiosClient } from '@/lib/axios'

export interface Category {
  id: number
  name: string
  image: string
  created_at: string
  updated_at: string
}

export const categoryApi = {
  getCategories: () => axiosClient.get<Category[]>('/userapi/categories/'),

  getCategoryById: (id: number | string) => axiosClient.get<Category>(`/userapi/categories/${id}/`),
}
