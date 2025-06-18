import { ReactRouterAppProvider } from '@toolpad/core/react-router'
import { Outlet } from 'react-router'
import { navigation } from './router/Router'

export default function App() {
  return (
    <ReactRouterAppProvider
      navigation={navigation}
      branding={{
        title: 'WMS',
      }}
    >
      <Outlet />
    </ReactRouterAppProvider>
  )
}
