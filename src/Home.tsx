/* ------------------------------------------------------------------
   Home page (public) │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-4xl font-bold">Welcome to the OAuth Dashboard</h1>

      {/* Primary action */}
      <Link to="/login" className="btn-primary">
        Login
      </Link>
    </section>
  );
}
