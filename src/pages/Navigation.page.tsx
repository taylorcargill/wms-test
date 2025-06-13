import { IconFingerprint, IconGauge, IconHome2 } from '@tabler/icons-react'
import { AppShell, AppShellNavbar, Burger, Group, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet, NavLink as RouterLink } from 'react-router'
import { Router } from '../Router'

export function Navigation() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          Taylor Cargill
        </Group>
      </AppShell.Header>
      <AppShellNavbar p="md">
        <NavLink
          href="/"
          label="With icon"
          leftSection={<IconHome2 size={16} stroke={1.5} />}
        />

        <NavLink
          label="Receiving"
          leftSection={<IconGauge size={16} stroke={1.5} />}
          childrenOffset={28}
          defaultOpened
          opened
        >
          <NavLink href="processing" label="Processing" />
        </NavLink>
      </AppShellNavbar>
      <AppShell.Main>
        <Router />
      </AppShell.Main>
    </AppShell>
  )
}
