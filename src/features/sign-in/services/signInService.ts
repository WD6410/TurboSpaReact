import { alovaInstance } from 'shared/config/apiConfig.ts';

export type IUser = {
  email: string;
  avatarUrl: string;
};

export type IUserWithPw = IUser & { password: string };

export type AuthSignInRequest = Pick<IUserWithPw, 'email' | 'password'>;

export type AuthSignInResponse = {
  token: string;
  user: IUser;
};

export const whoamiApi = () => {
  return alovaInstance.Get<{ user: IUser }>('/me');
};

export const signInApi = (formLogin: AuthSignInRequest) => {
  const methodInstance = alovaInstance.Post<AuthSignInResponse>(
    '/sign-in',
    formLogin,
  );
  methodInstance.meta = {
    ignoreToken: true,
  };
  return methodInstance;
};
