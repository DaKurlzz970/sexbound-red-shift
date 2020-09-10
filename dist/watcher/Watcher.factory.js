"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatcherFactory = void 0;
const Watcher_1 = require("./Watcher");
class WatcherFactory {
    static make() {
        const config = require("../../config.json");
        const filePath = config.starbound_log_file_path;
        return new Watcher_1.Watcher(filePath);
    }
}
exports.WatcherFactory = WatcherFactory;
