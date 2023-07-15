export const sessionStorageAdapter = {
  set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    return sessionStorage.getItem(key);
  },
  remove(key: string) {
    sessionStorage.removeItem(key);
  },
};
