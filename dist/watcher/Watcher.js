"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watcher = void 0;
const tail_1 = require("tail");
class Watcher {
    constructor(filename) {
        this.watcher = new tail_1.Tail(filename, {
            useWatchFile: true
        });
    }
    on(eventType, callback) {
        this.watcher.on(eventType, callback);
    }
}
exports.Watcher = Watcher;
