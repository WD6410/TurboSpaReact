export interface IGlobalStore {
  state: 'idle' | 'loading' | 'finished';
  startup: () => void;
  finish: () => void;
}
