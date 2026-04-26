import { appendFormDataValue } from '@/lib/api-form-data'
import { axiosClient } from '@/lib/axios'

export type AuthGender = 'male' | 'female' | 'other'

export interface AuthUser {
  id: number
  email: string
  role: string
  full_name: string
  gender: string
  date_of_birth: string
  image: string
  contact_number?: string
  membership_Id?: string
  skin_type?: string
}

export interface AuthTokenPayload {
  access_token: string
  refresh_token: string
  access: string
  refresh: string
  user: AuthUser
}

export interface AuthResponse {
  success: boolean
  message: string
  data: AuthTokenPayload
}

export interface AuthMessageResponse {
  success: boolean
  message: string
  data: Record<string, never>
}

export interface LoginRequestData {
  email: string
  password: string
}

export interface RegisterRequestData {
  email: string
  password: string
  contact_number?: string
  date_of_birth?: string
  full_name?: string
  gender?: AuthGender
  image?: File | string
  skin_type?: string
}

export interface RefreshTokenRequestData {
  refresh: string
}

export interface RefreshTokenResponse {
  refresh: string
  access?: string
}

export interface PasswordChangeRequestData {
  old_password: string
  new_password: string
}

const createAuthFormData = (
  data: LoginRequestData | RegisterRequestData | RefreshTokenRequestData | PasswordChangeRequestData
) => {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    appendFormDataValue(formData, key, value)
  }

  return formData
}

const normalizeAuthResponse = (response: { data: AuthResponse }) => {
  const { access_token, refresh_token } = response.data.data

  return {
    ...response,
    data: {
      ...response.data,
      data: {
        ...response.data.data,
        access: access_token,
        refresh: refresh_token,
      },
    },
  }
}

export const authApi = {
  login: (data: LoginRequestData) =>
    axiosClient
      .post<AuthResponse>('/login/', createAuthFormData(data), {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(normalizeAuthResponse),

  register: (data: RegisterRequestData) =>
    axiosClient
      .post<AuthResponse>('/register/', createAuthFormData(data), {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(normalizeAuthResponse),

  refresh: (data: RefreshTokenRequestData) =>
    axiosClient.post<RefreshTokenResponse>('/refresh/', createAuthFormData(data), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),

  changePassword: (data: PasswordChangeRequestData) =>
    axiosClient.post<AuthMessageResponse>('/password-change/', createAuthFormData(data), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
}
