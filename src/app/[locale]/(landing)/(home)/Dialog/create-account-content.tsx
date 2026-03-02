'use client'

import { useCreateTempInfo } from '@/api/api-hooks/member.api-hook'
import createProfileBg from '@/assets/image/modals/complete-profile-image.png'
import { DatePicker } from '@/components/shared/date-picker'
import { lato } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { MembershipModalStep } from '@/store/membership-modal.store'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { ChevronDown, Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

const createAccountSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
  contactNumber: z.string().min(10, 'Contact number must be at least 10 digits'),
  skinType: z.string().min(1, 'Please select a skin type'),
  birthday: z
    .date({ message: 'A date of birth is required' })
    .refine((birthday) => birthday <= new Date(), {
      message: 'Birthday cannot be a future date',
    }),
})

type CreateAccountFormData = z.infer<typeof createAccountSchema>

type CreateAccountContentProps = {
  setCurrentStep: (step: MembershipModalStep) => void
}

export const CreateAccountContent = ({ setCurrentStep }: CreateAccountContentProps) => {
  const t = useTranslations('home.createAccountDialog')
  const SkinTypeOptions = [
    { value: 'normal', label: t('fields.skinTypeOptions.normal') },
    { value: 'dry', label: t('fields.skinTypeOptions.dry') },
    { value: 'oily', label: t('fields.skinTypeOptions.oily') },
    { value: 'combination', label: t('fields.skinTypeOptions.combination') },
    { value: 'sensitive', label: t('fields.skinTypeOptions.sensitive') },
  ]

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
    mode: 'onBlur',
  })

  const { mutateAsync: createTempInfo, isPending } = useCreateTempInfo()

  const onFormSubmit = async (data: CreateAccountFormData) => {
    const birthday = format(data.birthday, 'yyyy-MM-dd')

    await createTempInfo(
      {
        full_name: data.fullName,
        email: data.email,
        contact_number: data.contactNumber,
        skin_type: data.skinType,
        birthday: birthday,
        lean: 'EN',
      },
      {
        onSuccess: () => {
          setCurrentStep('welcome')
        },
        onError: (error) => {
          console.log('createTempInfo Error: ', error)
          toast.error('Something went wrong. Please try again.')
        },
      }
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="relative grid grid-cols-1 lg:grid-cols-12"
      style={{
        backgroundImage: `url(${createProfileBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="col-span-5 hidden lg:block"></div>
      {/* Form Content */}
      <div className="flex flex-col gap-6 bg-white/20 p-6 backdrop-blur-[1px] md:p-12 lg:col-span-7">
        {/* Header */}
        <div className="flex flex-col gap-8 text-center text-black">
          <div className="text-xl">
            <p className="mb-0">{t('title')}</p>
            <p>{t('subtitle')}</p>
          </div>
          <p className={cn('text-lg', lato.className)}>{t('offer')}</p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-2">
          {/* Full Name */}
          <div className="grid grid-cols-3 gap-2">
            <label htmlFor="fullName" className="min-w-24 text-base font-normal text-black">
              {t('fields.fullName')}
            </label>
            <div className="col-span-2 flex flex-col">
              <input
                type="text"
                id="fullName"
                placeholder={t('fields.fullNamePlaceholder')}
                className="coming-create-modal-input"
                {...register('fullName')}
                aria-invalid={errors.fullName ? 'true' : 'false'}
              />
              {errors.fullName && (
                <span className="mt-1 text-xs text-red-600" role="alert">
                  {errors.fullName.message}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="grid grid-cols-3 gap-2">
            <label htmlFor="email" className="min-w-24 text-base text-black">
              {t('fields.email')}
            </label>
            <div className="col-span-2 flex flex-col">
              <input
                type="email"
                id="email"
                placeholder={t('fields.emailPlaceholder')}
                className="coming-create-modal-input"
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <span className="mt-1 text-xs text-red-600" role="alert">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Contact Number */}
          <div className="grid grid-cols-3 gap-2">
            <label htmlFor="contactNumber" className="min-w-32 text-base text-black">
              {t('fields.contactNumber')}
            </label>
            <div className="col-span-2 flex flex-col">
              <input
                type="tel"
                id="contactNumber"
                placeholder={t('fields.contactNumberPlaceholder')}
                className="coming-create-modal-input"
                {...register('contactNumber')}
                aria-invalid={errors.contactNumber ? 'true' : 'false'}
              />
              {errors.contactNumber && (
                <span className="mt-1 text-xs text-red-600" role="alert">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
          </div>

          {/* Skin Type */}
          <div className="grid grid-cols-3 gap-2">
            <label htmlFor="skinType" className="min-w-24 text-base text-black">
              {t('fields.skinType')}
            </label>
            <div className="col-span-2 flex flex-col">
              <div className="relative w-full">
                <select
                  id="skinType"
                  className="h-9.5 w-full appearance-none rounded-full bg-white px-5 py-2 pr-10 text-sm text-black focus:ring-2 focus:ring-black/20 focus:outline-none"
                  {...register('skinType')}
                  aria-invalid={errors.skinType ? 'true' : 'false'}
                >
                  <option value="">{t('fields.skinTypePlaceholder')}</option>
                  {SkinTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-black" />
              </div>
              {errors.skinType && (
                <span className="mt-1 text-xs text-red-600" role="alert">
                  {errors.skinType.message}
                </span>
              )}
            </div>
          </div>

          {/* Birthday */}
          <div className="grid grid-cols-3 gap-2">
            <label className="min-w-24 text-base text-black">{t('fields.birthday')}</label>
            <div className="col-span-2 flex flex-col">
              <Controller
                control={control}
                name="birthday"
                render={({ field }) => (
                  <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    labelName={t('fields.SelectDateLabelName')}
                    maxDate={new Date()}
                  />
                )}
              />
              {errors.birthday && (
                <span className="mt-1 text-xs text-red-600" role="alert">
                  {errors.birthday.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          disabled={isPending}
          className="mx-auto mt-4 flex h-9.5 w-64 cursor-pointer items-center justify-center rounded-full bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : t('cta')}
        </button>
      </div>
    </form>
  )
}
