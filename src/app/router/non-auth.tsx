import { signInRoute } from 'features/sign-in/router';
import type { RouteObject } from 'react-router-dom';

export const nonAuth: RouteObject[] = [...signInRoute];
