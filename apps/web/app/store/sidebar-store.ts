// app/store/sidebar-store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarStore {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      open: true,
      setOpen: (open) => set({ open }),
      toggle: () => set((s) => ({ open: !s.open })),
    }),
    { name: "sidebar" }
  )
);