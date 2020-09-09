"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
const axios_1 = require("axios");
const config = require('../config.json');
class EventHandler {
    static handleEvent(eventName, eventArgs) {
        axios_1.default.post(`${config.api_url}/record`, EventHandler.buildRequestData(eventName, eventArgs), EventHandler.buildRequestConfig()).catch(reason => { console.error(reason); });
    }
    static buildRequestData(eventName, eventArgs) {
        return { eventName: eventName, eventArgs: eventArgs };
    }
    static buildRequestConfig() {
        return {
            headers: { "X-API-KEY": config.api_key }
        };
    }
}
exports.EventHandler = EventHandler;
