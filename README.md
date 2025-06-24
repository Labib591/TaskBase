# TaskBase - Task Marketplace

**Live Site**: [taskbase-c16cd.web.app](https://taskbase-c16cd.web.app/)

---

## 📌 Project Purpose

TaskBase is a feature-rich task marketplace system developed to simplify task booking and management. It enables users to seamlessly add, update, delete, search, and book tasks. Designed with a focus on usability, animations, and modern web practices, this platform is a comprehensive solution for both task providers and task service providers.

---

## 🎯 Key Features

* 🔐 **Firebase Authentication** (Email/Password + Google Login)
* 📦 **CRUD Operations** for tasks (Add, Update, Delete with real-time updates)
* 📅 **Smart Bidding System** with modification and cancellation support
* 🔁 **Cascade Delete/Update**: Modifying or deleting a task automatically reflects in details
* 💥 **Animated UI** with Lottie, Framer Motion, and smooth UX
* ⚠️ **Custom 404 Error Page** with animated GIF and redirect to homepage
* 📱 **Fully Responsive** for mobile, tablet, and desktop

---

## 🔧 Technologies & Tools

### 🖥️ Frontend

* **React.js**
* **React Router DOM** – Route protection and navigation
* **Firebase Auth** – Secure authentication and access control
* **React Icons** – Iconography
* **Lottie React** – Beautiful JSON-based animations
* **Framer Motion** – Smooth animations and transitions
* **SweetAlert2** – Interactive confirmation modals

### 🌐 Backend (for reference)

* **Express.js + MongoDB** – API, database
* **Node.js**

---

## 🚀 Pages Overview

* **Home** – Banner, Why Choose Us, Latest Listings, Special Offers
* **Available Tasks** – Grid/List toggle
* **Task Details** – Full task profile + bidding functionality
* **Add Task** *(Private)* – Form with detailed fields
* **My Tasks** *(Private)* – Manage your tasks with update/delete
* **Login/Register** – Firebase-based authentication
* **404 Error Page** – Friendly redirect with Lottie animation


## 🗂️ Folder Structure (Client)

```
src/
│
├── assets/                 # Images, animations, icons
├── Components/             # Shared components (Navbar, Footer, Modals)
├── Pages/                  # Route-specific pages
├── Context/                # AuthContext (Firebase + user state)
├── Routes/ 
├── Layouts/                # PrivateRoute, Router configs
└── main.jsx                 # Main app entry
```

---

## 📦 NPM Packages Used

```bash
npm install react-router firebase sweetalert2 react-icons lottie-react framer-motion
```

---

## ✅ Deployment Checklist

* 🔒 Firebase & DB credentials are stored in `.env`
* 🚀 Hosted frontend on Firebase: [taskbase-c16cd.web.app](https://taskbase-c16cd.web.app/)
* 🔁 Smooth navigation, protected routes, no CORS/404 errors
* 💡 More 15 meaningful commits on client side

---

## 🧠 Author

**Mahir Labib**
Frontend Developer | Problem Solver | UI/UX Enthusiast

---
