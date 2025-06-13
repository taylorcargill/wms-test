import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ProcessingPage } from './pages/Processing.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/processing',
    element: <ProcessingPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
