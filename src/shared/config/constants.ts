// STORAGE

export const AUTH_KEY = 'token';
export const THEME_KEY = 'app_theme';

// DATE TIME

export const DD_MM_YYYY = 'DD/MM/YYYY';

// API

export const endpointApi = {
  signIn: '/sign-in',
  whoami: '/me',
  tasks: '/tasks',
  employees: '/employees',

  products: '/products',

  // endpoint_api
} as const;

// REGEX

export const regexEmail = /^\S+@\S+$/;

// USER ROLES

export const USER_ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const;
