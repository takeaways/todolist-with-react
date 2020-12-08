const storage = window.localStorage;

export default {
  set(key: string, value: string) {
    storage.setItem(key, value);
  },
  get(key: string) {
    return storage.getItem(key);
  },
};
