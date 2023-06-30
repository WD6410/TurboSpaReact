import { AUTH_KEY } from 'shared/config/constants';

export const handleLoginSuccess = (data: any) => {
  localStorage.setItem(AUTH_KEY, data.token);
};
