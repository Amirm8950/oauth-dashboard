/* ------------------------------------------------------------------
   Firebase initialisation │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

/*  Env-vars (define these in .env at project root)
    ───────────────────────────────────────────────
    VITE_FB_API_KEY=...
    VITE_FB_AUTH_DOMAIN=...
    VITE_FB_PROJECT_ID=...
    VITE_FB_STORAGE_BUCKET=...          # optional if not using Storage
    VITE_FB_APP_ID=...
    VITE_FB_MEASUREMENT_ID=...          # optional if you want Analytics
*/

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FB_API_KEY,
  authDomain:        import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FB_STORAGE_BUCKET,
  appId:             import.meta.env.VITE_FB_APP_ID,
  measurementId:     import.meta.env.VITE_FB_MEASUREMENT_ID, // optional
};

// ─── Initialise core services ───────────────────────────────────────
const app  = initializeApp(firebaseConfig);

export const auth     = getAuth(app);
export const google   = new GoogleAuthProvider();
export const github   = new GithubAuthProvider();

// ─── Analytics (only if measurementId present & browser supports) ──
if (import.meta.env.VITE_FB_MEASUREMENT_ID) {
  isSupported().then(ok => {
    if (ok) getAnalytics(app);
  });
}
