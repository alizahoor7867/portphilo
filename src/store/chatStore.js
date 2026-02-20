import { create } from 'zustand'

export const useChatStore = create((set, get) => ({
  messages: [],
  isOpen: false,
  isTyping: false,

  addMessage: (message) => set((state) => ({
    messages: [...state.messages, { ...message, id: Date.now() }]
  })),

  setTyping: (isTyping) => set({ isTyping }),

  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),

  closeChat: () => set({ isOpen: false }),

  openChat: () => set({ isOpen: true }),

  clearMessages: () => set({ messages: [] }),
}))
