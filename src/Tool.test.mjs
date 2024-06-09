import test, { describe } from "node:test"
import { Tool } from "./Tool.mjs"
import assert from "node:assert"
import path from "node:path"
import { App } from "./app/index.mjs"

describe("Tool", () => {

  const tool = new Tool()

  describe("app", () => {

    const app = tool.app

    test("basic values", async () => {
      const apps = await app.system()
      const appStore = apps.find(app => app.name === "App Store")
      assert.equal(appStore.path, path.join(App.DIR_SYSTEM, "App Store.app"))
    })
  })
})
