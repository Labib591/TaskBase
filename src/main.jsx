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
import ThemeProvider from './Components/ThemeContext.jsx';
import Error from './Components/Error.jsx';
import router from './Routes/Routes.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider><AuthProvider><RouterProvider router={router} /></AuthProvider></ThemeProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
