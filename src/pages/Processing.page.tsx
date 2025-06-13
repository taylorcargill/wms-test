import { IconFingerprint, IconGauge, IconHome2 } from '@tabler/icons-react'
import { AppShell, AppShellNavbar, Burger, Group, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function ProcessingPage() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

  return (
    <div>Processing</div>
  )
}
