# OAuth Dashboard 🛡️

Live Demo → **https://oauth-dashboard-amirm8950.vercel.app**

Modern React + TypeScript demo that showcases Google & GitHub OAuth authentication, route protection, and a profile dashboard—built with Vite and Tailwind CSS.

---

## ✨ Features

| Page / Feature | Details |
|----------------|---------|
| **Home (`/`)** | Public landing page with welcome copy and “Login / Dashboard” CTA. |
| **Login (`/login`)** | Sign-in with Google or GitHub. Graceful loader & error states. |
| **Dashboard (`/dashboard`)** | Protected route—shows avatar, display-name, email, and Logout. |
| **Route Guard** | Redirects unauthenticated users to `/login`. |
| **Account Linking** | Handles `auth/account-exists-with-different-credential` and lets users link providers. |
| **Responsive UI** | Tailwind‐based design, gradient background, custom brand palette. |

---

## 🛠️ Tech Stack

| Layer | Library / Tool |
|-------|----------------|
| UI | React 18 + Vite 5 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 (custom palette, Google Fonts) |
| Auth | Firebase Authentication (Google & GitHub providers) |
| State | Zustand |
| Routing | React Router DOM v6 |
| Deployment | Vercel (global CDN) |

---

## 🚀 Local Setup

```bash
git clone https://github.com/Amirm8950/oauth-dashboard.git
cd oauth-dashboard
npm install
npm run dev
````

> **.env:** create a file named `.env` in the project root and paste **your** Firebase keys:

```env
VITE_FB_API_KEY=yourApiKey
VITE_FB_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FB_PROJECT_ID=your-project
VITE_FB_STORAGE_BUCKET=your-project.appspot.com
VITE_FB_APP_ID=yourAppId
# optional
# VITE_FB_MEASUREMENT_ID=G-XXXXXXX
```

---

## 🔑 Firebase & GitHub OAuth Config

| Step  | Action                                                                                                                                                                                                                                  |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | [Create a Firebase project](https://console.firebase.google.com/) → **Add Web App** → copy the config snippet.                                                                                                                          |
| **2** | *Firebase → Authentication → Sign-in method* → enable **Google** & **GitHub**.                                                                                                                                                          |
| **3** | In GitHub → **Settings → Developer settings → OAuth Apps** → create an app:<br> • **Homepage URL:** `https://your-project.firebaseapp.com`<br> • **Authorization callback URL:** `https://your-project.firebaseapp.com/__/auth/handler` |
| **4** | Copy GitHub **Client ID** & **Client Secret** back into Firebase provider settings → **Save**.                                                                                                                                          |
| **5** | *Firebase → Authentication → Settings → Authorized domains* → add:<br> • `localhost` (already there)<br> • `your-app.vercel.app` (after deployment)                                                                                     |
| **6** | Paste the config values into `.env`, restart `npm run dev`, and enjoy!                                                                                                                                                                  |

---

## 📜 Scripts

| Command           | Purpose                             |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start Vite dev server (hot-reload)  |
| `npm run build`   | Production build to `dist/`         |
| `npm run preview` | Preview the prod build locally      |
| `npm run lint`    | *(optional)* ESLint (if configured) |

---

## 🌍 Deployment

The live URL above is hosted on **Vercel**.
Deploy your own copy in 3 steps:

1. **Import GitHub repo** into Vercel.
2. Add the same `VITE_FB_*` keys in **Project → Settings → Environment Variables** (attach to *Production*).
3. Click **Deploy** → add the new `*.vercel.app` domain to Firebase’s Authorized Domains.

---

## 📝 License

MIT – use this boilerplate for whatever you like.
Made with ❤️ by **Amir Mehdi Memari**.

````

### Using it

1. Replace `yourApiKey`, `your-project`, etc. in the `.env` sample block with placeholders that match your own wording if you prefer.  
2. If you add screenshots or badges, insert them near the top.  
3. Save the file, then commit & push:

```bash
git add README.md
git commit -m "docs: final README with live demo link"
git push
````
