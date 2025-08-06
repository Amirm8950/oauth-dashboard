/* ------------------------------------------------------------------
   Top navigation bar │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    setUser(null);
    navigate('/', { replace: true });
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container flex items-center justify-between h-14">
        <Link to="/" className="text-lg font-semibold font-display">
          OAuth Dashboard
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="btn-primary h-9">
              Dashboard
            </Link>
            <button onClick={logOut} className="btn-secondary h-9">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn-primary h-9">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
