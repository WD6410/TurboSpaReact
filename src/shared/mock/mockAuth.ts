import { defineMock } from '@alova/mock';
import CryptoJS from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';
import _ from 'lodash-es';

const mockUser = new Map();

mockUser.set('truongdq.dev@gmail.com', {
  password: 123456789,
  email: 'truongdq.dev@gmail.com',
  avatarUrl:
    'https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4',
});

export const mockSignIn = defineMock({
  '[POST]/sign-in': ({ data }) => {
    if (
      mockUser.has(data.email) &&
      String(mockUser.get(data.email)?.password) === data.password
    ) {
      return {
        user: _.omit(mockUser.get(data.email), 'password'),
        token: Base64.stringify(CryptoJS.HmacSHA1(data.email, 'private_key')),
      };
    }
    throw new Error('User not found');
  },
  '/me': ({ query }) => {
    if (mockUser.has(query.email)) {
      return {
        user: _.omit(mockUser.get(query.email), 'password'),
      };
    }
    return {
      status: 500,
      message: 'User not found',
    };
  },
});
