import { RouterProvider } from 'react-router-dom';
import { useGlobalStore } from 'shared/store';
import { Center, Spinner } from '@chakra-ui/react';
import { router } from './router';

export function App() {
  const state = useGlobalStore((store) => store.state);

  if (state === 'finished') {
    return <RouterProvider router={router} />;
  }

  return (
    <Center h='95vh'>
      <Spinner color='orange.400' size='xl' />
    </Center>
  );
}
