import { axiosClient } from '@/lib/axios'
import { appendFormDataValue } from '@/lib/api-form-data'

export type ProfileGender = 'male' | 'female' | 'other'

export interface Profile {
  date_of_birth: string
  email: string
  full_name: string
  gender: ProfileGender
  image: string
  role: string
}

export interface UpdateProfileRequestData {
  date_of_birth?: string
  email?: string
  full_name?: string
  gender?: ProfileGender
  image?: File | string
}

const createProfileFormData = (data: UpdateProfileRequestData) => {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    appendFormDataValue(formData, key, value)
  }

  return formData
}

export const profileApi = {
  getProfile: () => axiosClient.get<Profile>('/profile/'),

  updateProfile: (data: UpdateProfileRequestData) =>
    axiosClient.patch<Profile>('/profile/', createProfileFormData(data), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
}
