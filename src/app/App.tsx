import { RouterProvider } from 'react-router-dom';
import { useGlobalStore } from 'shared/store';
import { router } from './router';
import { Center, Loader } from '@mantine/core';

export function App() {
  const state = useGlobalStore((store) => store.state);

  if (state === 'finished') {
    return <RouterProvider router={router} />;
  }

  return (
    <Center h='95vh'>
      <Loader />
    </Center>
  );
}
