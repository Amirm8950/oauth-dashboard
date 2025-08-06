/* ------------------------------------------------------------------
   Guards child route when user is unauthenticated │ Amir
   ------------------------------------------------------------------ */
import { Navigate } from 'react-router-dom';
import { useAuth }  from '../store';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const user = useAuth(s => s.user);
  return user ? children : <Navigate to="/login" replace />;
}
