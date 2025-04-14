import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import UserManagement from './pages/UserManagement'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
  {
     path:"/",
     element: <Navigate to="/login" replace />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute><UserManagement /></ProtectedRoute>,
    errorElement: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
