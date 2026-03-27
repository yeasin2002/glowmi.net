import wave from '@/assets/icons/wave.svg'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type Props = {
  heading: string
  subHeading?: string
  showWave?: boolean

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
  showWave = false,
}: Props) => {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-center gap-4',
        wrapperClassname
      )}
    >
      <h2 className={cn(`text-2xl font-normal text-black lg:text-5xl`, headingClassName)}>
        {heading}
      </h2>
      {showWave && <Image src={wave} alt="wave" className="w-52" />}

      {subHeading && <h3 className={cn(`text-[#363739]`, subHeadingClassname)}>{subHeading}</h3>}
    </div>
  )
}
