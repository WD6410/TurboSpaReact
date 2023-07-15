import { createContext, useContext } from 'react';
import { createStore, useStore } from 'zustand';
import { IAuthStore } from './types';
import { sessionStorageAdapter } from 'shared/config/storageConfig';
import { AUTH_KEY } from 'shared/config/constants';

export type AuthStore = ReturnType<typeof initializeAuthStore>;

const AuthContext = createContext<AuthStore | null>(null);

export const AuthStoreProvider = AuthContext.Provider;

export const useAuthStore = <T>(selector: (state: IAuthStore) => T) => {
  const store = useContext(AuthContext);

  if (!store) throw new Error('AuthContext is missing the provider');

  return useStore(store, selector);
};

export const initializeAuthStore = (preloadState: Partial<IAuthStore>) => {
  return createStore<IAuthStore>((set) => {
    const storageToken = sessionStorageAdapter.get(AUTH_KEY);
    console.log('storageToken', storageToken);

    return {
      ...preloadState,
      isAuthentication: !!sessionStorageAdapter.get(AUTH_KEY),
      token: null,
      user: null,
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
    };
  });
};
