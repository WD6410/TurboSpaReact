import { alovaInstance } from 'shared/config/apiConfig.ts';

export const whoamiApi = () => {
  return alovaInstance.Get('/me');
};

export type AuthSignInRequest = {
  email: string;
  password: string;
};

export type AuthSignInResponse = {
  status: number;
  message: string;
  token: string;
};

export const siginInApi = (formLogin: AuthSignInRequest) => {
  const methodInstance = alovaInstance.Post<AuthSignInResponse>(
    '/sign-in',
    formLogin,
  );
  methodInstance.meta = {
    ignoreToken: true,
  };
  return methodInstance;
};
