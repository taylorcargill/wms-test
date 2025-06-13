import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Navigation } from './pages/Navigation.page';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Navigation />
    </MantineProvider>
  );
}
