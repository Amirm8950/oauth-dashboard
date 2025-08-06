/* ------------------------------------------------------------------
   Global auth state (Zustand) │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */
import { create } from 'zustand';
import { User }   from 'firebase/auth';

interface AuthState {
  user: User | null;
  setUser: (u: User | null) => void;
}

export const useAuth = create<AuthState>(set => ({
  user: null,
  setUser: u => set({ user: u }),
}));
