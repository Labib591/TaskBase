import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import AddTask from './Pages/AddTask.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import PrivateRoute from './Context/PrivateRoute.jsx';
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: LoginPage
      },
      {
        path: "/register",
        Component: RegisterPage
      },
      {
        path: "/addtask",
        element: <PrivateRoute><AddTask /></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
