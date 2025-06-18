import App from '@/App'
import Layout from '@/layouts/Dashboard'
import {
  default as CycleCountPage,
  default as HomePage,
} from '@/pages/HomePage'
import { Home, Person } from '@mui/icons-material'
import { Navigation } from '@toolpad/core/AppProvider'
import { createBrowserRouter } from 'react-router-dom'

const navigation: Navigation = [
  {
    title: 'Home',
    icon: <Home />,
  },
  {
    segment: 'users',
    title: 'Users',
    icon: <Person />,
  },
]

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

export { navigation, router }
