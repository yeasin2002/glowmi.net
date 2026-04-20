import type { AxiosError } from 'axios'

export interface ApiErrorResponse {
  message?: string
  detail?: string
  error?: string
}

export const getApiErrorMessage = (error: AxiosError<unknown>, fallbackMessage: string) => {
  const responseData = error.response?.data

  if (typeof responseData === 'object' && responseData !== null) {
    const apiError = responseData as ApiErrorResponse

    return apiError.message ?? apiError.detail ?? apiError.error ?? fallbackMessage
  }

  return fallbackMessage
}
