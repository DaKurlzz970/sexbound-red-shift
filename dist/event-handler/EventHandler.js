"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
class EventHandler {
    constructor(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    handleEvent(eventName, eventArgs) {
        if (!process.env.api_url)
            return Promise.resolve();
        return this.httpRequestService.post(`${process.env.api_url}/record`, this.buildRequestData(eventName, eventArgs), this.buildRequestConfig());
    }
    buildRequestData(eventName, eventArgs) {
        return { eventName: eventName, eventArgs: eventArgs };
    }
    buildRequestConfig() {
        return { headers: { "X-API-KEY": process.env.api_key } };
    }
}
exports.EventHandler = EventHandler;
