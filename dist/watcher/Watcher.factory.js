"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatcherFactory = void 0;
const Watcher_1 = require("./Watcher");
class WatcherFactory {
    static make() {
        const filePath = process.env.starbound_log_file_path;
        return new Watcher_1.Watcher(filePath);
    }
}
exports.WatcherFactory = WatcherFactory;
