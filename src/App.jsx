import { MantineProvider, Stack } from '@mantine/core';
import '@mantine/core/styles.css';

const App = () => {
  return (
    <MantineProvider>
      <Stack gap={0} />
    </MantineProvider>
  );
};

export default App;
