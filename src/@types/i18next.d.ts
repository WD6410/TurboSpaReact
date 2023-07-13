import * as resources from '../shared/translations/resources';
import { defaultNS } from '../shared/translations';
export type LanguageKey = keyof typeof resources;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources.vi;
  }
}
