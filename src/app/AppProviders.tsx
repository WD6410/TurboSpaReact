import { ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';
import { GlobalProvider } from 'shared/providers';
import { theme } from 'shared/theme';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider>{children}</GlobalProvider>
      <Toaster />
    </ChakraProvider>
  );
};
