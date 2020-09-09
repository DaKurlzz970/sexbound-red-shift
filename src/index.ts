import { Tail } from "tail"
import { EventHandler } from "./EventHandler"
const config = require("../config.json")

let filename = config.starbound_log_file_path
let starboundLogStream = new Tail(filename, {
  useWatchFile: true
})

starboundLogStream.on("line", function(data: string) {
  let metadata = data.match(/\[.*]\s(SXB_METADATA.*)/)
  if (metadata == null) return
  metadata = metadata[1].split(':')
  EventHandler.handleEvent(metadata[1], metadata[2])
})