import { defineMock } from '@alova/mock';
import CryptoJS from 'crypto-js';
import _ from 'lodash-es';
import { USER_ROLES } from 'shared/config/constants';

const mockUser = new Map();
export const private_key = 'private_key';

mockUser.set('truongdq.dev@gmail.com', {
  password: 123456789,
  email: 'truongdq.dev@gmail.com',
  avatarUrl:
    'https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4',
  roles: [USER_ROLES.USER],
});

export const mockSignIn = defineMock({
  '[POST]/sign-in': ({ data }) => {
    if (
      mockUser.has(data.email) &&
      String(mockUser.get(data.email)?.password) === data.password
    ) {
      return {
        user: _.omit(mockUser.get(data.email), 'password'),
        token: CryptoJS.AES.encrypt(data.email, private_key).toString(),
      };
    }
    throw new Error('User not found');
  },
  '/me': ({ headers }) => {
    const [, token] = headers.Authorization.split(' ');

    const email = CryptoJS.AES.decrypt(token, private_key).toString(
      CryptoJS.enc.Utf8,
    );

    if (mockUser.has(email)) {
      return {
        user: _.omit(mockUser.get(email), 'password'),
      };
    }
    return {
      status: 500,
      message: 'User not found',
    };
  },
});
