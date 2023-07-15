import { createAlova } from 'alova';
import ReactHook from 'alova/react';
import { envConfig } from './envConfig';
import { createAlovaMockAdapter } from '@alova/mock';
import { mockSignIn } from 'shared/mock/mockAuth';
import { sessionStorageAdapter } from 'shared/config/storageConfig.ts';
import { axiosMockResponse, axiosRequestAdapter } from '@alova/adapter-axios';

export const alovaInstance = createAlova({
  // ReactHook is used to create ref status, including request status loading, response data data, request error object error, etc.
  statesHook: ReactHook,

  // request adapter, it is recommended to use the fetch request adapter
  requestAdapter:
    envConfig.turboNodeEnv === 'development'
      ? createAlovaMockAdapter([mockSignIn], {
          httpAdapter: axiosRequestAdapter(),
          delay: 1500,
          mockRequestLogger: true,
          ...axiosMockResponse,
        })
      : axiosRequestAdapter(),

  baseURL: envConfig.turboApiUrl,

  beforeRequest(method) {
    if (!method.meta?.ignoreToken) {
      method.config.headers.Authorization = `Bearer ${JSON.parse(
        sessionStorageAdapter.get('token') as string,
      )}`;
    }
  },
  storageAdapter: sessionStorageAdapter,
  errorLogger(error, methodInstance) {
    reportError(`${methodInstance.url}: ${error.message}`);
  },
  responded: {
    onSuccess(response) {
      return response.data;
    },
  },
});
