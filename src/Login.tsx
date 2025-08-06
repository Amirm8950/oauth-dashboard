/* ------------------------------------------------------------------
   OAuth login page │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */

import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, google, github } from './firebase';
import { useAuth } from './store';
import { useNavigate } from 'react-router-dom';
import Loader from './components/Loader';

export default function Login() {
  const setUser   = useAuth(s => s.setUser);
  const navigate  = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState<string | null>(null);

  const handleLogin = async (provider: 'google' | 'github') => {
    setError(null);
    setLoading(true);
    try {
      const cred = await signInWithPopup(auth, provider === 'google' ? google : github);
      setUser(cred.user);
      localStorage.setItem('token', await cred.user.getIdToken());
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h2 className="text-2xl font-semibold">Choose a provider</h2>

      {loading ? (
        <Loader />
      ) : (
        <>
          <button onClick={() => handleLogin('google')} className="btn-primary w-52">
            Sign in with Google
          </button>
          <button onClick={() => handleLogin('github')} className="btn-secondary w-52">
            Sign in with GitHub
          </button>
        </>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
}
