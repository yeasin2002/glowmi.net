import { create } from 'zustand'

export type MembershipModalStep = 'be-member' | 'create-account' | 'welcome'

type MembershipModalState = {
  isOpen: boolean
  step: MembershipModalStep | null
  open: (step?: MembershipModalStep) => void
  close: () => void
  setStep: (step: MembershipModalStep) => void
  openFromAnnouncement: () => void
}

export const useMembershipModalStore = create<MembershipModalState>((set) => ({
  isOpen: false,
  step: null,
  open: (step = 'be-member') => set({ isOpen: true, step }),
  close: () => set({ isOpen: false, step: null }),
  setStep: (step) => set({ isOpen: true, step }),
  openFromAnnouncement: () => set({ isOpen: true, step: 'create-account' }),
}))
