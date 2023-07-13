import { PropsWithChildren, useRef } from 'react';
import {
  GlobalStore,
  GlobalStoreProvider,
  initializeGlobalStore,
} from 'shared/store';
import 'shared/translations';

export default function GlobalProvider({
  children,
  ...props
}: PropsWithChildren) {
  const storeRef = useRef<GlobalStore>();
  if (!storeRef.current) {
    storeRef.current = initializeGlobalStore(props);
  }
  return (
    <GlobalStoreProvider value={storeRef.current}>
      {children}
    </GlobalStoreProvider>
  );
}
