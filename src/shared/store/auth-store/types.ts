import { IUser } from 'features/sign-in/services/signInService';

export interface IAuthStore {
  user?: IUser | null;
  isAuthentication: boolean;
  token?: string | null;
  setUser(user?: IUser): void;
  setToken(token?: string): void;
  signOut(): void;
}
