/* ------------------------------------------------------------------
   Central route map │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */

import { createBrowserRouter } from 'react-router-dom';
import App        from './App';
import Home       from './Home';
import Login      from './Login';
import Dashboard  from './Dashboard';
import Protected  from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true,      element: <Home /> },
      { path: 'login',    element: <Login /> },
      {
        path: 'dashboard',
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
    ],
  },
]);
