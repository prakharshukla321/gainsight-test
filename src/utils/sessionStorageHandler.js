class SessionStorageHandler {
  #key;
  constructor(key) {
    this.#key = key;
  }

  set(value) {
    sessionStorage.setItem(this.#key, value);
  }

  get() {
    return sessionStorage.getItem(this.#key);
  }

  remove() {
    sessionStorage.removeItem(this.#key);
  }

  clear() {
    sessionStorage.clear();
  }
}

export default SessionStorageHandler;
