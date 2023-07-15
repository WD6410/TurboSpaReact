import { defineMock } from '@alova/mock';

const mockUser = new Map();

mockUser.set('truongdq.dev@gmail.com', {
  password: 123456789,
  email: 'truongdq.dev@gmail.com',
});
mockUser.set('admin@gmail.com', { password: 123456789 });

export const mockSignIn = defineMock({
  '[POST]/sign-in': ({ data }) => {
    if (
      mockUser.has(data.email) &&
      String(mockUser.get(data.email)?.password) === data.password
    ) {
      return {
        status: 200,
        message: 'success',
        token: window.crypto.randomUUID(),
      };
    }
    throw new Error('User not found');
  },
  '/me': ({ query }) => {
    if (mockUser.has(query.email)) {
      return {
        status: 200,
        data: {
          user: mockUser.get(query.email),
        },
      };
    }
    return {
      status: 500,
      message: 'User not found',
    };
  },
});
