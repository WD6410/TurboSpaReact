export const sessionStorageAdapter = {
  set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    const result = sessionStorage.getItem(key);
    return result ? JSON.parse(result) : '';
  },
  remove(key: string) {
    sessionStorage.removeItem(key);
  },
};
