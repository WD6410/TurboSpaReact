export interface IStoreImplement {
  init(): Promise<void>;
  state: 'idle' | 'loading' | 'finished';
}
