import { MacOSApp } from "./MacOSApp.mjs"
import { subDirsNames } from "@javarome/fileutil"
import path from "node:path"

export class App {
  /**
   * @readonly
   * @type {string}
   */
  static DIR_SYSTEM = "/System/Applications"

  /**
   *
   * @return {Promise<MacOSApp[]>}
   */
  async system () {
    return App.fromDir(App.DIR_SYSTEM)
  }

  /**
   *
   * @return {Promise<MacOSApp[]>}
   */
  async user () {
    return App.fromDir(App.DIR_SYSTEM)
  }

  static async fromDir (dirName) {
    const fileNames = await subDirsNames(dirName)
    return fileNames.map(name => new MacOSApp(path.join(dirName, name)))
  }
}
