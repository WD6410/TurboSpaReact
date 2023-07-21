import { IUser } from 'features/sign-in/services/signInService';
import { IStoreImplement } from '../types';

export interface IAuthStore extends IStoreImplement {
  user?: IUser | null;
  isAuthentication: boolean;
  token?: string | null;
  setUser(user?: IUser): void;
  setToken(token?: string): void;
  signOut(): void;
}
