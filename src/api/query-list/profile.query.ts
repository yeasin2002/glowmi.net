import { appendFormDataValue } from '@/lib/api-form-data'
import { axiosClient } from '@/lib/axios'

export type ProfileGender = 'male' | 'female' | 'other'

export interface Profile {
  full_name: string
  email: string
  role: string
  image: string | null
  gender: ProfileGender | null
  date_of_birth: string | null
  contact_number: string | null
  skin_type: string | null
}

export interface ProfileResponse {
  success: boolean
  message: string
  data: Profile
}

export interface UpdateProfileRequestData {
  date_of_birth?: string
  email?: string
  full_name?: string
  gender?: ProfileGender
  image?: File | string
  skin_type?: string
}

const createProfileFormData = (data: UpdateProfileRequestData) => {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    appendFormDataValue(formData, key, value)
  }

  return formData
}

export const profileApi = {
  getProfile: () => axiosClient.get<ProfileResponse>('/profile/'),

  updateProfile: (data: UpdateProfileRequestData) =>
    axiosClient.patch<ProfileResponse>('/profile/', createProfileFormData(data), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
}
