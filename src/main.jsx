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
import BrowseTask from './Pages/BrowseTask.jsx';
import MyTasks from './Pages/MyTasks.jsx';
import UpdateTask from './Pages/UpdateTask.jsx';
import TaskDetailPage from './Pages/TaskDetailPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://task-base-server.vercel.app/tasks?limit=6'),
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
      },
      {
        path: "/tasks",
        loader: () => fetch('https://task-base-server.vercel.app/tasks'),
        Component: BrowseTask
      },
      {
        path: "/mytasks",
        loader: () => fetch('https://task-base-server.vercel.app/tasks'),
        element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>
      },
      {
        path: "/task/:id",
        loader: ({ params }) => fetch(`https://task-base-server.vercel.app/tasks/${params.id}`),
        element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>
      },
      {
        path: "/tasks/task/:id",
        loader: ({ params }) => fetch(`https://task-base-server.vercel.app/tasks/${params.id}`),
        element:<PrivateRoute><TaskDetailPage></TaskDetailPage></PrivateRoute>
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
