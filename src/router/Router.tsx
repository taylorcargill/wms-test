import App from '@/App'
import Layout from '@/layouts/Dashboard'
import {
  default as CycleCountPage,
  default as HomePage,
} from '@/pages/HomePage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: HomePage,
          },
          {
            path: 'users',
            Component: CycleCountPage,
          },
        ],
      },
    ],
  },
])

export { router }
