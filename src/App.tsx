/* ------------------------------------------------------------------
   Root shell + Firebase auth listener │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */

import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useAuth } from './store';

export default function App() {
  const setUser = useAuth(s => s.setUser);

  // Keep global auth-state in sync with Firebase
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => setUser(u));
    return () => unsub();
  }, [setUser]);

  return <Outlet />;
}
