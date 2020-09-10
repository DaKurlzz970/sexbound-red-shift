import { Watcher } from "./Watcher"

export class WatcherFactory {
  public static make() {
    const config   = require("../../config.json")
    const filePath = config.starbound_log_file_path
    return new Watcher(filePath)
  }
}