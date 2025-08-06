/* ------------------------------------------------------------------
   Root shell + Firebase auth listener │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useAuth } from './store';
import Navbar from './components/Navbar';

export default function App() {
  const setUser = useAuth(s => s.setUser);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => setUser(u));
    return () => unsub();
  }, [setUser]);

  return (
    <>
      <Navbar />
      <main className="container py-10">
        <Outlet />
      </main>
    </>
  );
}
