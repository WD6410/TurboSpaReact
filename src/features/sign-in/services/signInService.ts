import { alovaInstance } from 'shared/config/apiConfig.ts';
import { endpointApi } from 'shared/config/constants';

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
  return alovaInstance.Get<{ user: IUser }>(endpointApi.whoami);
};

export const signInApi = (formLogin: AuthSignInRequest) => {
  const methodInstance = alovaInstance.Post<AuthSignInResponse>(
    endpointApi.signIn,
    formLogin,
  );
  methodInstance.meta = {
    ignoreToken: true,
  };
  return methodInstance;
};
