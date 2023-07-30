import { Notifications } from '@mantine/notifications';
import { PropsWithChildren, useEffect } from 'react';
import { useAuthStore, useGlobalStore } from 'shared/store';
import { isMobile } from 'react-device-detect';

import 'shared/translations';

export default function GlobalProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const promises = [
      useGlobalStore.getState().init(),
      useAuthStore.getState().init(),
    ];

    Promise.all(promises)
      .then(() => {
        console.log('all init function loaded!');
      })
      .catch((err) => {
        console.error('load init function error: ', err);
      });
  }, []);
  return isMobile ? (
    <div>Not support mobile!</div>
  ) : (
    <>
      <Notifications position='top-right' />
      {children}
    </>
  );
}
