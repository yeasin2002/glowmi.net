'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDown, Pencil } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useProfile, useUpdateProfile } from '@/api/api-hooks/profile.api-hook'
import { IconInput } from '@/components/shared/auth-input'
import { Button } from '@/components/ui'
import { useEffect } from 'react'

const Settings = () => {
  const t = useTranslations('profile.settings')
  const { data: userProfile, isLoading } = useProfile()
  const { mutateAsync: updateProfile, isPending: isUpdating } = useUpdateProfile()
  const homeTranslations = useTranslations('home.createAccountDialog')
  const SkinTypeOptions = [
    { value: 'normal', label: homeTranslations('fields.skinTypeOptions.normal') },
    { value: 'dry', label: homeTranslations('fields.skinTypeOptions.dry') },
    { value: 'oily', label: homeTranslations('fields.skinTypeOptions.oily') },
    { value: 'combination', label: homeTranslations('fields.skinTypeOptions.combination') },
    { value: 'sensitive', label: homeTranslations('fields.skinTypeOptions.sensitive') },
  ]

  const settingsSchema = z.object({
    name: z.string().min(1, t('errors.nameRequired')),
    gender: z.string().min(1, t('errors.genderRequired')),
    email: z.string().min(1, t('errors.emailRequired')).email(t('errors.emailInvalid')),
    skinType: z.string().min(1, t('errors.skinTypeRequired')),
  })

  type SettingsFormData = z.infer<typeof settingsSchema>

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
  })

  useEffect(() => {
    if (!isLoading && userProfile) {
      setValue('name', userProfile.full_name || '')
      setValue('gender', userProfile.gender || '')
      setValue('email', userProfile.email || '')
      setValue('skinType', userProfile.skin_type || '')
    }
  }, [isLoading, setValue, userProfile])

  const onSubmit = async (data: SettingsFormData) => {
    try {
      await updateProfile({
        full_name: data.name,
        email: data.email,
        gender: data.gender as 'male' | 'female' | 'other',
        skin_type: data.skinType,
      })
    } catch (error) {
      console.error('Failed to update profile:', error)
    }
  }

  return (
    <div className="bg-brand-shade-10 rounded-xl p-6">
      <h2 className="mb-6 text-4xl leading-none font-normal text-[#F7F5ED]!">{t('title')}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <IconInput
          label={t('name')}
          placeholder={t('namePlaceholder')}
          variant="default"
          labelClassName="text-main-button pb-4!"
          className="placeholder:text-main-button text-main-button text-sm"
          error={errors.name?.message}
          {...register('name')}
        />
        <IconInput
          label={t('gender')}
          placeholder={t('genderPlaceholder')}
          variant="default"
          labelClassName="text-main-button pb-4!"
          className="placeholder:text-main-button text-main-button text-sm"
          error={errors.gender?.message}
          {...register('gender')}
        />
        <IconInput
          label={t('email')}
          placeholder={t('emailPlaceholder')}
          type="email"
          variant="default"
          labelClassName="text-main-button pb-4!"
          className="placeholder:text-main-button text-main-button text-sm"
          error={errors.email?.message}
          {...register('email')}
        />
        {/* <IconInput
          label={t('skinType')}
          placeholder={t('skinTypePlaceholder')}
          variant="default"
          labelClassName="text-main-button pb-4!"
          className="placeholder:text-main-button text-main-button text-sm"
          error={errors.skinType?.message}
          {...register('skinType')}
        /> */}

        {/* Skin Type */}
        <div className="space-y-1.5">
          <label htmlFor="skinType" className="text-main-button pb-4! text-sm font-medium">
            {t('skinType')}
          </label>
          <div className="relative">
            <select
              id="skinType"
              className={`border-input bg-background ring-offset-background focus-visible:ring-ring placeholder:text-main-button text-main-button flex h-12 w-full appearance-none rounded-md border px-3 py-2 pr-10 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${errors.skinType ? 'border-destructive' : ''}`}
              {...register('skinType')}
              aria-invalid={errors.skinType ? 'true' : 'false'}
            >
              <option value="" disabled hidden>
                {t('skinTypePlaceholder')}
              </option>
              {SkinTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="text-main-button pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2" />
          </div>
          {errors.skinType && (
            <p className="text-destructive text-sm" role="alert">
              {errors.skinType.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="outline"
          className="text-main-button! mt-2 rounded-md border border-[#E0E0E0] bg-[#FFF] px-12 py-5 font-bold"
          disabled={isSubmitting}
          style={{
            boxShadow: `0 4px 4px 0 rgba(255, 255, 255, 0.25) inset, 0 -4px 5.1px 0 rgba(0, 0, 0, 0.20) inset`,
          }}
        >
          <Pencil className="text-main-button! size-4" />
          {isSubmitting ? t('saving') : t('editProfile')}
        </Button>
      </form>
    </div>
  )
}

export default Settings
