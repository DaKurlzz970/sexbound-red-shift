"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandlerFactory = void 0;
const EventHandler_1 = require("./EventHandler");
const HttpRequestService_1 = require("../http/HttpRequestService");
class EventHandlerFactory {
    static make() {
        return new EventHandler_1.EventHandler(new HttpRequestService_1.HttpRequestService);
    }
}
exports.EventHandlerFactory = EventHandlerFactory;
