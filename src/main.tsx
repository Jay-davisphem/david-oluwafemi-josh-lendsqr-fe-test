import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './pages/layout/layout'
import Login from './pages/login/login'
import ErrorPage from './pages/error-page/error-page'
import Dashboard from './pages/dashboard/dashboard'
import Users from './pages/users/users'
import User from './pages/user/user'
import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
    {
      path: '/dashboard',
      element: <Dashboard />,
      index: true
    },
    {
      path: '/users',
      element: <Users />
    },
    {
      path: '/users/:id',
      element: <User />
    },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
