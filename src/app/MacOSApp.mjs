import path from "node:path"

export class MacOSApp {
  /**
   * @type {string}
   */
  #path

  /**
   * @param {string} path
   */
  constructor (path) {
    this.#path = path
  }

  /**
   * @return {string}
   */
  get path() {
    return this.#path
  }

  /**
   * @return {string}
   */
  get name () {
    return path.parse(this.#path).name
  }
}
