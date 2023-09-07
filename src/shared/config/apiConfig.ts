import { createAlova } from 'alova';
import ReactHook from 'alova/react';
import { envConfig } from './envConfig';
import { createAlovaMockAdapter } from '@alova/mock';
import { sessionStorageAdapter } from 'shared/config/storageConfig.ts';
import { axiosMockResponse, axiosRequestAdapter } from '@alova/adapter-axios';
import { AUTH_KEY } from './constants';
import { useAuthStore } from 'shared/store';
import { mocks } from 'shared/mock';

export const alovaInstance = createAlova({
  // ReactHook is used to create ref status, including request status loading, response data data, request error object error, etc.
  statesHook: ReactHook,

  // request adapter, it is recommended to use the fetch request adapter
  requestAdapter:
    envConfig.turboNodeEnv === 'development'
      ? createAlovaMockAdapter(mocks, {
          httpAdapter: axiosRequestAdapter(),
          delay: 1500,
          mockRequestLogger: true,
          ...axiosMockResponse,
        })
      : axiosRequestAdapter(),

  baseURL: envConfig.turboApiUrl,

  beforeRequest(method) {
    if (!method.meta?.ignoreToken) {
      const token =
        useAuthStore.getState().token ?? sessionStorageAdapter.get(AUTH_KEY);

      method.config.headers.Authorization = `Bearer ${token}`;
    }
  },
  storageAdapter: sessionStorageAdapter,
  errorLogger(error, methodInstance) {
    reportError(
      `[${methodInstance.type}]${methodInstance.url}: ${error.message}`,
    );
  },
  responded: {
    onSuccess(response) {
      return response.data;
    },
  },
});
