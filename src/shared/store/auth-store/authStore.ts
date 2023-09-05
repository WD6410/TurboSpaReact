import { create } from 'zustand';
import { IAuthStore } from './types';
import { sessionStorageAdapter } from 'shared/config/storageConfig';
import { AUTH_KEY } from 'shared/config/constants';
import { whoamiApi } from 'features/sign-in/services/signInService';
import { useGlobalStore } from '../global-store';
import { notifications } from '@mantine/notifications';
import _ from 'lodash-es';
import { redirect } from 'react-router-dom';

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthentication: !!sessionStorageAdapter.get(AUTH_KEY),
  token: null,
  user: null,
  state: 'idle',
  setToken(token) {
    sessionStorageAdapter.set(AUTH_KEY, token);
    set({
      isAuthentication: !!token,
      token,
    });
  },
  setUser(user) {
    set({
      isAuthentication: !!user,
      user,
    });
  },
  signOut() {
    sessionStorageAdapter.remove(AUTH_KEY);
    set({
      isAuthentication: false,
      token: null,
      user: null,
    });
  },
  async init() {
    const token = sessionStorageAdapter.get(AUTH_KEY);
    if (token) {
      useGlobalStore.getState().startup();
      try {
        const whoami = await whoamiApi().send();
        console.log('whoami', whoami);

        set({ user: whoami.user, token, isAuthentication: true });
      } catch (error) {
        notifications.show({
          message: _.get(
            error,
            'message',
            '[auth_store]: Đã có lỗi sảy ra, vui lòng thử lại sau!',
          ),
          color: 'red',
        });
      } finally {
        useGlobalStore.getState().finish();
      }
    } else {
      useGlobalStore.getState().finish();
      redirect('/sign-in');
    }
  },
}));
