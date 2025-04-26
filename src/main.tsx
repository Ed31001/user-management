import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import Login from './pages/Login';
import UserManagement from './pages/UserManagement';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import AddUser from './pages/AddUser'; // Import the new AddUser page
import { useThemeStore } from './store/useThemeStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient(); // Initialize React Query client

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <UserManagement />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
    },
    {
      path: '/dashboard/new', // Add the new route
      element: (
        <ProtectedRoute>
          <AddUser />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);