import { cn } from '@/lib/utils'

type Props = {
  heading: string
  subHeading?: string

  // styles
  wrapperClassname?: string
  headingClassName?: string
  subHeadingClassname?: string
}

export const SiteHeading = ({
  heading,
  subHeading,
  wrapperClassname,
  headingClassName,
  subHeadingClassname,
}: Props) => {
  return (
    <div className={cn('flex w-full flex-col items-center justify-center gap-4', wrapperClassname)}>
      <h2 className={cn(`text-2xl font-normal text-black lg:text-5xl`, headingClassName)}>
        {heading}
      </h2>
      {subHeading && <h3 className={cn(`text-[#363739]`, subHeadingClassname)}>{subHeading}</h3>}
    </div>
  )
}
