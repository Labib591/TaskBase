import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRoute from "../Context/PrivateRoute";
import AddTask from "../Pages/AddTask";
import BrowseTask from "../Pages/BrowseTask";
import MyTasks from "../Pages/MyTasks";
import UpdateTask from "../Pages/UpdateTask";
import TaskDetailPage from "../Pages/TaskDetailPage";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardOverview from "../Components/DashboardOverview";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('https://task-base-server.vercel.app/tasks?limit=4'),
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
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            Component: DashboardOverview,
        },
        {
            path: "/dashboard/addtask",
            element: <PrivateRoute><AddTask /></PrivateRoute>
        },
        
            {
        path: "/dashboard/mytasks",
        loader: () => fetch('https://task-base-server.vercel.app/tasks'),
        element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>
      },
        
    ]
  }
]);

export default router;