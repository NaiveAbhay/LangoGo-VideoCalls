# LangoGo – Video Calls & Chat Platform

> **Real‑time language exchange made easy.**
> Connect with speakers around the world through instant messaging **and** crystal‑clear video calls — complete with screen‑sharing, recording, reactions, and more.

[Live Demo »](https://langogo-videocalls.onrender.com)

---

## 🌟 Highlights

* 🌐 **Live Chat & Reactions** – Chat in real time with typing indicators, reactions, and threaded messages.
* 📞 **Video Calling** – Enjoy seamless 1-on-1 and group calls with **screen share** and recording.
* 🔐 **Security** – Endpoints protected with **JWT**, cookies, and role-based access.
* 🧪 **Tested Every Step** – All API routes were rigorously tested with Postman throughout development to ensure reliable responses and minimize bugs.
🗄️ **Database Done Right** – Uses MongoDB Atlas for cloud-native storage and Mongoose for a clean, schema-driven data model.
* 🧭 **Built for Language Exchange** – Smart onboarding with native/learning language pairing.
* 🖌️ **UI Themes** – Fully responsive design with **30+ themes** using TailwindCSS and DaisyUI.
* ⚡ **Modern Tech Stack** – React 19 + Express + MongoDB + Zustand + TanStack Query.
* 🧠 **State Made Easy** – Global state managed cleanly with Zustand.
* 🛡️ **Error Handling Done Right** – Both client and server-side validation with fallbacks.
* 🚀 **Free & Fast Hosting** – Deployable on Render/Vercel for instant access.
* 📦 **Powered by Stream** – Scalable infrastructure for messaging and video APIs.

---

## ✨ Key Features

|                                   | Description                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------------- |
| 🌱 **Scalable API**               | RESTful Express server, MongoDB Atlas, modular controllers & middleware.                |
| 🔐 **Secure Auth**                | JWT‑based authentication, HTTP‑only cookies, protected routes.                          |
| 💬 **Stream Chat Integration**    | Typing indicators, threaded replies, emoji reactions, unread counts.                    |
| 📹 **1‑on‑1 & Group Video Calls** | Powered by [Stream Video](https://getstream.io). Screen‑share, record, & mute controls. |
| 👥 **Friend System**              | Send / accept friend requests, see pending invites, recommended users.                  |
| 🌐 **On‑boarding Wizard**         | Collect native / learning language, bio, and location on first login.                   |
| ⚡ **Real‑time Notifications**     | Toasts & badge counts for requests, messages, and call invites.                         |

---

## 🏗️ Tech Stack

| Layer        | Tools & Libraries                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | React 19 · Vite · @tanstack/react‑query · Zustand · Stream Chat/Video SDK · Tailwind CSS 3 · DaisyUI · React‑Hot‑Toast · Lucide Icons |
| **Backend**  | Node 20 · Express 4 · MongoDB 8 (Mongoose 8) · Stream Chat 8.6x · JSON Web Token · Bcrypt JS · CORS · Cookie‑Parser · Dotenv          |
| **Dev ops**  | Nodemon · ESLint 9 · Vite Preview · Render (free tier)                                                                                |

---

## ⚙️ Local Setup

```bash
# 1. Clone the monorepo
git clone https://github.com/NaiveAbhay/LangoGo-VideoCalls.git
cd LangoGo-VideoCalls

# 2. Install root dependencies
npm install           # installs husky / shared scripts

# 3. Install & build each workspace
cd backend && npm install
cd ../frontend && npm install
```

### Environment variables

Create a **`backend/.env`** file:

```env
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET_KEY=<long-random-secret>
STREAM_API_KEY=<stream-chat-api-key>
STREAM_SECRET_KEY=<stream-chat-secret>
NODE_ENV=development
```

For the **frontend** (`frontend/.env`):

```env
VITE_STREAM_API_KEY=<same-as-above>
VITE_BACKEND_URL=http://localhost:5000
```

> ℹ️ Sign‑up for free Stream credentials at [https://getstream.io](https://getstream.io).

### Run in development

```bash
# Terminal 1 – API
cd backend
npm run dev          # nodemon on http://localhost:5000

# Terminal 2 – Web
cd frontend
npm run dev          # vite on http://localhost:5173
```

Open [http://localhost:5173](http://localhost:5173) and register a new account.
The backend will auto‑seed your Stream user profile on sign‑up.

---

## 📁 Project Structure

```
LangoGo-VideoCalls/
├── backend/
│   ├── src/
│   │   ├── controllers/     # auth, user, chat
│   │   ├── routes/          # /api/auth · /api/user · /api/chat
│   │   ├── middleware/      # auth JWT guard
│   │   ├── models/          # User schema
│   │   ├── lib/             # db.js · stream.js helpers
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # pages + shared UI
│   │   ├── hooks/           # react‑query & zustand stores
│   │   └── App.jsx
│   └── package.json
└── package.json             # workspace scripts
```

---


## 🚀 Deployment

The project is **production‑ready** out‑of‑the‑box:

1. **Backend**
   Deploy `backend/` to **Render** or **Railway**.
   ‑ Set the same environment variables used locally.

2. **Frontend**
   Run `npm run build` inside `frontend` and deploy the `dist/` folder to **Vercel**, **Netlify**, or serve via Express in production (already configured in `server.js`).

> The live demo linked above is hosted on **Render** with the React build served from the same Express instance.

---

## 🤝 Contributing

1. Fork the repo and create your feature branch: `git checkout -b feature/awesome`
2. Commit your changes: `git commit -m 'feat: add awesome'`
3. Push to the branch: `git push origin feature/awesome`
4. Open a Pull Request 🚀

---

## 📜 License

Distributed under the **MIT License**.
See `LICENSE` for more information.

---

## 👨‍💻 Author

**Abhay Jadon** – [@NaiveAbhay](https://github.com/NaiveAbhay)

*If you find this project helpful, please give it a ⭐️!*
