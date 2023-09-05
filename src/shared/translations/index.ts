import { initReactI18next } from 'react-i18next';
import * as resources from './resources';
import { use } from 'i18next';
import { envConfig } from 'shared/config/envConfig';

const ns = Object.keys(Object.values(resources)[0]);
export const defaultNS = ns[0];

export default use(initReactI18next).init({
  ns,
  defaultNS,
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {},
    ),
  },
  lng: 'vi',
  fallbackLng: 'vi',
  compatibilityJSON: 'v3',
  nsSeparator: '.',
  react: { useSuspense: true },
  debug: envConfig.turboNodeEnv !== 'production',
  returnObjects: false,
});
