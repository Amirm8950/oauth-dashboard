/* ------------------------------------------------------------------
   Protected dashboard │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */

import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useAuth } from './store';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    setUser(null);
    navigate('/', { replace: true });
  };

  if (!user) return null; // extra guard

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6">
      <img
        src={user.photoURL || undefined}
        alt="avatar"
        referrerPolicy="no-referrer"
        className="h-24 w-24 rounded-full border shadow"
      />
      <h2 className="text-2xl font-bold">{user.displayName}</h2>
      <p className="text-gray-500">{user.email}</p>

      <button onClick={logOut} className="btn-secondary mt-4">
        Logout
      </button>
    </section>
  );
}
