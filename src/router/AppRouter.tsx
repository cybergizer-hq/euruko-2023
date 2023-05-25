import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterErrorBoundary } from './RouterErrorBoundary/RouterErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Main')
  },
  {
    path: '/speakers',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Speakers')
  },
  {
    path: '*',
    lazy: () => import('~/pages/NotFound')
  }
]);

export const AppRouter = () => <RouterProvider router={router} />;
