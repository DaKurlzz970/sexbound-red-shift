"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tail_1 = require("tail");
const EventHandler_1 = require("./EventHandler");
const config = require("../config.json");
let filename = config.starbound_log_file_path;
let starboundLogStream = new tail_1.Tail(filename, {
    useWatchFile: true
});
starboundLogStream.on("line", function (data) {
    let metadata = data.match(/\[.*]\s(SXB_METADATA.*)/);
    if (metadata == null)
        return;
    metadata = metadata[1].split(':');
    EventHandler_1.EventHandler.handleEvent(metadata[1], metadata[2]);
});
