import { X } from 'lucide-react'

export const StickyAnnouncement = () => {
  return (
    <section className="flex h-11.25 w-full items-center justify-center gap-x-20 bg-black text-[20px] font-normal text-white">
      <h2 className="">Join Glowmi Circle — Early Access to THE CIRCLE</h2>
      <button aria-label="close announcement">
        <X />
      </button>
    </section>
  )
}
