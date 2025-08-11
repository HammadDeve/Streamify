# 🎬 Streamify - Real-time Chat & Video Call Platform

Website 🌐: https://streamify-h42k.onrender.com  
LinkedIn : https://www.linkedin.com/in/muhammad-hammad-613318366

---

## 🚀 About Streamify

Streamify is a **real-time messaging and video conferencing app** built with modern web technologies. It enables seamless communication with features including:

- 💬 Real-time chat with message sharing  
- 📁 File sharing in chat  
- 🎥 Video calling with screen sharing  
- 🔴 Video recording during calls  
- 😀 Live reactions and interactive UI  

Perfect for remote teams, study groups, or friends who want to stay connected effortlessly.

---

## 🛠️ Features

- **User Authentication & Authorization**  
- Real-time **one-on-one and group chat** with message history  
- File upload and download inside chats  
- **Video calls with screen sharing** capabilities  
- In-call **live reactions** (emojis, likes, etc.)  
- Call recording for meetings or lectures  
- Responsive and clean UI with smooth user experience  

---

## ⚙️ Getting Started - Run Locally

### Prerequisites

- Node.js (v16+) and npm installed  
- MongoDB connection URI  
- Frontend build generated (Vite/React or similar)  

---

### Backend Setup

```bash
cd backend
npm install

Create a .env file in the backend root with:

PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend server:

npm run dev   # For development with hot reload
# or
npm start     # For production mode

Frontend Setup

cd frontend
npm install
npm run dev          # For development server with hot reload
npm run build


📂 Folder Structure
bash
Copy
Edit
project-root/
│
├── backend/           # Express server & API routes
│   ├── src/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── server.js
│   └── .env
│
├── frontend/          # React/Vite frontend source & build files
│   ├── src/
│   └── dist/
└── README.md


This project is licensed under the MIT License.

Built with ❤️ by Muhammad Hammad
