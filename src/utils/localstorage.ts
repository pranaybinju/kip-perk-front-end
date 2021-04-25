export default class LocalStorageService {
  static readItem(key: string) {
    return localStorage.getItem(key);
  }

  static writeItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  static deleteItem(key: string) {
    localStorage.removeItem(key);
  }

  static clearLocalStorage() {
    localStorage.clear();
  }
}
