'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Pencil } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { IconInput } from '@/components/shared/auth-input'
import { Button } from '@/components/ui'

const Settings = () => {
  const t = useTranslations('profile.settings')

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
    formState: { errors, isSubmitting },
  } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      name: t('defaultValues.name'),
      gender: t('defaultValues.gender'),
      email: t('defaultValues.email'),
      skinType: t('defaultValues.skinType'),
    },
  })

  const onSubmit = async (data: SettingsFormData) => {
    // TODO: API integration
    console.log(data)
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
        <IconInput
          label={t('skinType')}
          placeholder={t('skinTypePlaceholder')}
          variant="default"
          labelClassName="text-main-button pb-4!"
          className="placeholder:text-main-button text-main-button text-sm"
          error={errors.skinType?.message}
          {...register('skinType')}
        />

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
