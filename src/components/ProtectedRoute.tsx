/* ------------------------------------------------------------------
   Guards child route when user is unauthenticated │ Amir
----------------------------------------------------------------- */
import type { ReactElement } from 'react';     // ← type-only import
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store';

export default function ProtectedRoute({
  children,
}: {
  children: ReactElement;                      // ← use ReactElement
}) {
  const user = useAuth((s) => s.user);
  return user ? children : <Navigate to="/login" replace />;
}
