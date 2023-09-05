import { signInRoute } from 'features/sign-in/route';
import type { RouteObject } from 'react-router-dom';

export const nonAuth: RouteObject[] = [...signInRoute];
