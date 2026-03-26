'use client'

import { IconInput } from '@/components/shared/auth-input'
import { Button } from '@/components/ui'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Upload } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const productSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  subTitle: z.string().min(1, 'Sub title is required'),
  price: z.string().min(1, 'Price is required'),
  size: z.string().min(1, 'Size is required'),
  discount: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  productId: z.string().min(1, 'Product ID is required'),
  stock: z.string().min(1, 'Stock is required'),
  keyIngredients: z.string().min(1, 'Key ingredients is required'),
  skinType: z.string().min(1, 'Skin type is required'),
  keyBenefits: z.string().min(1, 'Key benefits is required'),
  description: z.string().min(1, 'Description is required'),
  howToUse: z.string().min(1, 'How to use is required'),
})

type ProductFormData = z.infer<typeof productSchema>

export const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  })

  const onSubmit = async (data: ProductFormData) => {
    // TODO: API integration
    console.log(data)
  }

  const labelClassName = 'text-white'
  const inputClassName = 'bg-[#F8F5EE] border-0'

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium text-white">Add Products</h1>
        <p className="text-sm text-white/60">
          Listing your product with clear details with this module
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <IconInput
          label="Title"
          placeholder="Write your the title"
          variant="default"
          labelClassName={labelClassName}
          className={inputClassName}
          error={errors.title?.message}
          {...register('title')}
        />

        <IconInput
          label="Sub Title"
          placeholder="Write your the sub title"
          variant="default"
          labelClassName={labelClassName}
          className={inputClassName}
          error={errors.subTitle?.message}
          {...register('subTitle')}
        />

        <IconInput
          label="Price"
          placeholder="Write your the price"
          variant="default"
          labelClassName={labelClassName}
          className={inputClassName}
          error={errors.price?.message}
          {...register('price')}
        />

        <IconInput
          label="Size(ml)"
          placeholder="Enter the size"
          variant="default"
          labelClassName={labelClassName}
          className={inputClassName}
          error={errors.size?.message}
          {...register('size')}
        />

        <IconInput
          label="Discount(%)"
          placeholder="Enter a discount"
          variant="default"
          labelClassName={labelClassName}
          className={inputClassName}
          error={errors.discount?.message}
          {...register('discount')}
        />

        <IconInput
          label="Category"
          placeholder="Select category"
          variant="default"
          labelClassName={labelClassName}
          className={inputClassName}
          error={errors.category?.message}
          {...register('category')}
        />

        <IconInput
          label="Product ID"
          placeholder="Write your the product id"
          variant="default"
          labelClassName={labelClassName}
          className={inputClassName}
          error={errors.productId?.message}
          {...register('productId')}
        />

        <IconInput
          label="Stock"
          placeholder="10"
          variant="default"
          labelClassName={labelClassName}
          className={inputClassName}
          error={errors.stock?.message}
          {...register('stock')}
        />

        {/* Textarea fields */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className={cn('text-sm font-medium', labelClassName)}>Key Ingredients</label>
            <div className="flex gap-1">
              <button type="button" className="rounded bg-white/20 px-2 py-0.5 text-xs text-white">
                B
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white italic"
              >
                I
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white underline"
              >
                U
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white line-through"
              >
                S
              </button>
            </div>
          </div>
          <Textarea
            placeholder="Write your the ingredients"
            className={cn('min-h-25 resize-none', inputClassName)}
            {...register('keyIngredients')}
          />
          {errors.keyIngredients && (
            <p className="text-destructive text-sm">{errors.keyIngredients.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className={cn('text-sm font-medium', labelClassName)}>Skin Type</label>
            <div className="flex gap-1">
              <button type="button" className="rounded bg-white/20 px-2 py-0.5 text-xs text-white">
                B
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white italic"
              >
                I
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white underline"
              >
                U
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white line-through"
              >
                S
              </button>
            </div>
          </div>
          <Textarea
            placeholder="Write your the ingredients"
            className={cn('min-h-25 resize-none', inputClassName)}
            {...register('skinType')}
          />
          {errors.skinType && <p className="text-destructive text-sm">{errors.skinType.message}</p>}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className={cn('text-sm font-medium', labelClassName)}>Key Benefits</label>
            <div className="flex gap-1">
              <button type="button" className="rounded bg-white/20 px-2 py-0.5 text-xs text-white">
                B
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white italic"
              >
                I
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white underline"
              >
                U
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white line-through"
              >
                S
              </button>
            </div>
          </div>
          <Textarea
            placeholder="Write your the ingredients"
            className={cn('min-h-25 resize-none', inputClassName)}
            {...register('keyBenefits')}
          />
          {errors.keyBenefits && (
            <p className="text-destructive text-sm">{errors.keyBenefits.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className={cn('text-sm font-medium', labelClassName)}>Description</label>
            <div className="flex gap-1">
              <button type="button" className="rounded bg-white/20 px-2 py-0.5 text-xs text-white">
                B
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white italic"
              >
                I
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white underline"
              >
                U
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white line-through"
              >
                S
              </button>
            </div>
          </div>
          <Textarea
            placeholder="Write about the info"
            className={cn('min-h-25 resize-none', inputClassName)}
            {...register('description')}
          />
          {errors.description && (
            <p className="text-destructive text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className={cn('text-sm font-medium', labelClassName)}>How to use</label>
            <div className="flex gap-1">
              <button type="button" className="rounded bg-white/20 px-2 py-0.5 text-xs text-white">
                B
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white italic"
              >
                I
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white underline"
              >
                U
              </button>
              <button
                type="button"
                className="rounded bg-white/20 px-2 py-0.5 text-xs text-white line-through"
              >
                S
              </button>
            </div>
          </div>
          <Textarea
            placeholder="Write your the info"
            className={cn('min-h-25 resize-none', inputClassName)}
            {...register('howToUse')}
          />
          {errors.howToUse && <p className="text-destructive text-sm">{errors.howToUse.message}</p>}
        </div>

        {/* Image upload */}
        <div className="space-y-1.5">
          <label className={cn('text-sm font-medium', labelClassName)}>Images</label>
          <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-white/30 bg-[#F8F5EE] hover:border-white/50">
            <Upload className="text-main-button size-8" />
            <p className="text-muted-foreground mt-2 text-sm">
              Drop your images here or select{' '}
              <span className="text-main-button cursor-pointer">click to browse</span>
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-main-button hover:bg-main-button/90 px-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'ADD PRODUCT'}
          </Button>
        </div>
      </form>
    </div>
  )
}
