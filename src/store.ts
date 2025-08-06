/* --------------------------------------------------------------
   Global auth state (Zustand) │ Amir
----------------------------------------------------------------- */
import { create } from 'zustand';
import type { User } from 'firebase/auth';   // ← type-only import

interface AuthState {
  user: User | null;
  setUser: (u: User | null) => void;
}

export const useAuth = create<AuthState>(set => ({
  user: null,
  setUser: u => set({ user: u }),
}));
