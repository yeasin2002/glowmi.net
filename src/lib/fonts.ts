import { Lato } from 'next/font/google'


export const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--next-font-lato',
  fallback: ['system-ui', 'sans-serif'],
})

const fontList = [lato]
export const fonts = fontList.map((f) => f.variable).join(' ')


// export const caudex = Caudex({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--next-',
//   fallback: ['Georgia', 'serif'],
// })

// export const openSans = Open_Sans({
//   weight: ['400', '600'],
//   subsets: ['latin', 'latin-ext'],
//   display: 'swap',
//   variable: '--next-',
//   fallback: ['system-ui', 'sans-serif'],
// })