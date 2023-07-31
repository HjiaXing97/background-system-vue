enum CacheType {
  Local,
  Session,
}

class Cache {
  storage: Storage;
  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage;
  }

  setValue(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }
  getValue(key: string) {
    const value = this.storage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
  }

  removeItem(keu: string) {
    this.storage.removeItem(keu);
  }

  clear() {
    this.storage.clear();
  }
}

const localCache = new Cache(CacheType.Local);
const sessionCache = new Cache(CacheType.Session);

export { localCache, sessionCache };
