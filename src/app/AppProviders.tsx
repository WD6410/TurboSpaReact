import { PropsWithChildren } from 'react';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useGlobalStore } from 'shared/store';
import { createCustomMantineTheme } from 'shared/theme';
import Div100vh from 'react-div-100vh';
import { HelmetProvider } from 'react-helmet-async';

export const AppProviders = ({ children }: PropsWithChildren) => {
  const { colorScheme, toggleColorScheme } = useGlobalStore();

  return (
    <HelmetProvider>
      <ColorSchemeProvider
        toggleColorScheme={toggleColorScheme}
        colorScheme={colorScheme}
      >
        <MantineProvider
          withNormalizeCSS
          withGlobalStyles
          withCSSVariables
          theme={createCustomMantineTheme({ colorScheme })}
        >
          <Div100vh>{children}</Div100vh>
        </MantineProvider>
      </ColorSchemeProvider>
    </HelmetProvider>
  );
};
