"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
const config = require('../../config.json');
class EventHandler {
    constructor(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    handleEvent(eventName, eventArgs) {
        return this.httpRequestService.post(`${config.api_url}/record`, this.buildRequestData(eventName, eventArgs), this.buildRequestConfig());
    }
    buildRequestData(eventName, eventArgs) {
        return { eventName: eventName, eventArgs: eventArgs };
    }
    buildRequestConfig() {
        return { headers: { "X-API-KEY": config.api_key } };
    }
}
exports.EventHandler = EventHandler;
