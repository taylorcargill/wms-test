import { Home, Person } from '@mui/icons-material'
import type { Navigation } from '@toolpad/core/AppProvider'
import { ReactRouterAppProvider } from '@toolpad/core/react-router'
import { Outlet } from 'react-router'

const NAVIGATION: Navigation = [
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

const BRANDING = {
  title: 'WMS',
}

export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  )
}
