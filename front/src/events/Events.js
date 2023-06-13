class Events {
  static #listeners = {}

  static invoke = (event, payload) => {
    try {
      this.#listeners[event] 
        && this.#listeners[event].forEach(listener => listener(payload))
    } catch {
      throw new Error('aaaa')
    }
  }
  static listen = (event, fn) => {
    try {
      this.#listeners[event] 
        && this.#listeners[event].push(fn)
      this.#listeners[event] = [fn]
    } catch (err) {
      
    }
  }
  static remove = (event, fn) => {
    if (event in this.#listeners) 
      this.#listeners[event] = this.#listeners[event].filter(listener => listener !== fn)
  }
}

