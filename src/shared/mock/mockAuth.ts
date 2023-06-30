import { defineMock } from '@alova/mock';

const mockUser = new Map();

mockUser.set('truongdq', { pw: 123 });
mockUser.set('admin', { pw: 123 });

export const mockSignIn = defineMock({
  '[POST]/sign-in': ({ data }) => {
    if (
      mockUser.has(data.username) &&
      mockUser.get(data.username)?.pw === data.pw
    ) {
      return {
        status: 200,
        message: 'success',
      };
    }
    return {
      status: 500,
      message: 'User not found',
    };
  },
  '/me': ({ query }) => {
    console.log('run here');

    if (mockUser.has(query.username)) {
      return {
        status: 200,
        data: mockUser.get(query.username),
      };
    }
    return {
      status: 500,
      message: 'User not found',
    };
  },
});
