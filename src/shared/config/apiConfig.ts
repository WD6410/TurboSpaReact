import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';
import { envConfig } from './envConfig';
import { createAlovaMockAdapter } from '@alova/mock';
import { mockSignIn } from 'shared/mock/mockAuth';

export const alovaInstance = createAlova({
  // ReactHook is used to create ref status, including request status loading, response data data, request error object error, etc.
  statesHook: ReactHook,

  // request adapter, it is recommended to use the fetch request adapter
  requestAdapter: createAlovaMockAdapter([mockSignIn], {
    httpAdapter: GlobalFetch(),
    delay: 1500,
  }),
  baseURL: envConfig.turboApiUrl,
  responded: (response: any) => response.json(),
});
