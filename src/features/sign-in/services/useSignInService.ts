import { alovaInstance } from 'shared/config/apiConfig';

export const signInService = (data: any) => {
  return alovaInstance.Post('/sign-in', data).send();
};
