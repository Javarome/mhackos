#!/usr/bin/env node
const executedLabel = "Executed in"
console.time(executedLabel)

import { CLI } from "./CLI.mjs"
import { Tool } from "../Tool.mjs"

const tool = new Tool()
const args = new CLI().getArgs()
let appCommand = args.app
switch (appCommand) {
  case "list": {
    console.log(tool.app.system())
  }
}
console.timeEnd(executedLabel)
