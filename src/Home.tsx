/* ------------------------------------------------------------------
   Home page │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */
import { Link } from 'react-router-dom';
import { useAuth } from './store';

export default function Home() {
  const user = useAuth(s => s.user);

  return (
    <section className="text-center flex flex-col items-center gap-4">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Welcome to the <span className="text-brand-500">OAuth Dashboard</span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl text-gray-600">
        This demo showcases Google & GitHub authentication, protected routes,
        and a profile dashboard built with React&nbsp;+&nbsp;TypeScript&nbsp;&amp;&nbsp;Tailwind CSS.
      </p>

      {/* Primary action */}
      {user ? (
        <Link to="/dashboard" className="btn-primary mt-3">
          Go to Dashboard
        </Link>
      ) : (
        <Link to="/login" className="btn-primary mt-3">
          Get Started
        </Link>
      )}
    </section>
  );
}
