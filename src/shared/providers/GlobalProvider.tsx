import { PropsWithChildren } from 'react';
import {
  AuthStoreProvider,
  GlobalStoreProvider,
  initializeAuthStore,
  initializeGlobalStore,
} from 'shared/store';
import 'shared/translations';

export default function GlobalProvider({ children }: PropsWithChildren) {
  return (
    <GlobalStoreProvider value={initializeGlobalStore({})}>
      <AuthStoreProvider value={initializeAuthStore({})}>
        {children}
      </AuthStoreProvider>
    </GlobalStoreProvider>
  );
}
