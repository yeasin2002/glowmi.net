import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { profileApi, type UpdateProfileRequestData } from '../query-list/profile.query'
import { getApiErrorMessage } from './utils'

const PROFILE_KEYS = {
  all: () => ['profile'] as const,
  detail: () => ['profile', 'detail'] as const,
}

export const useProfile = () => {
  return useQuery({
    queryKey: PROFILE_KEYS.detail(),
    queryFn: () => profileApi.getProfile(),
    select: (response) => response.data,
  })
}

export const useUpdateProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateProfileRequestData) => profileApi.updateProfile(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROFILE_KEYS.all() })
      toast.success('Profile updated successfully')
    },

    onError: (error: AxiosError) => {
      toast.error(getApiErrorMessage(error, 'Failed to update profile'))
    },
  })
}
