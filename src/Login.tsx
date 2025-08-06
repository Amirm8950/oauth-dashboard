/* ------------------------------------------------------------------
   OAuth login page with account-linking │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */
import { useState } from 'react';
import {
  signInWithPopup,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  AuthCredential,
} from 'firebase/auth';
import { auth, google, github } from './firebase';
import { useAuth } from './store';
import { useNavigate } from 'react-router-dom';
import Loader from './components/Loader';

export default function Login() {
  const setUser  = useAuth(s => s.setUser);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState<string | null>(null);
  const [pendingCred, setPendingCred] = useState<AuthCredential | null>(null); // ⚡ new

  const handleLogin = async (provider: 'google' | 'github') => {
    setError(null);
    setLoading(true);
    try {
      const cred = await signInWithPopup(auth, provider === 'google' ? google : github);
      setUser(cred.user);
      localStorage.setItem('token', await cred.user.getIdToken());
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      // ⚡ handle account-exists error
      if (err.code === 'auth/account-exists-with-different-credential') {
        const email  = err.customData?.email;
        const cred   = err.credential as AuthCredential;
        const methods = await fetchSignInMethodsForEmail(auth, email);
        // We assume Google is the other provider in this demo
        if (methods.includes('google.com')) {
          setPendingCred(cred);
          setError(
            'This email is already using Google sign-in. ' +
            'Please sign-in with Google once to link your GitHub account.'
          );
        } else {
          setError('Account exists with a different provider: ' + methods.join(', '));
        }
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // ⚡ link pending GitHub credential after Google sign-in
  const linkAfterGoogle = async () => {
    if (!pendingCred) return;
    try {
      const googleResult = await signInWithPopup(auth, google);
      await linkWithCredential(googleResult.user, pendingCred);
      setUser(googleResult.user);
      localStorage.setItem('token', await googleResult.user.getIdToken());
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      setError(err.message);
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
          {/* ⚡ Show link-account button when needed */}
          {pendingCred && (
            <button onClick={linkAfterGoogle} className="btn-primary w-52">
              Link GitHub to Google account
            </button>
          )}
        </>
      )}

      {error && <p className="text-red-500 max-w-sm text-center">{error}</p>}
    </section>
  );
}
