"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const ConfigValidator_factory_1 = require("./config-validator/ConfigValidator.factory");
const Watcher_factory_1 = require("./watcher/Watcher.factory");
const EventHandler_factory_1 = require("./event-handler/EventHandler.factory");
ConfigValidator_factory_1.ConfigValidatorFactory.make().validate().then(() => {
    console.log("watching..");
    Watcher_factory_1.WatcherFactory.make().on("line", function (data) {
        let metadata = data.match(/\[.*]\s(SXB_EVENT.*)::(.*)::(.*)/);
        if (metadata == null)
            return;
        console.log("EVENT : " + metadata[2] + " => " + metadata[3]);
        let eventHandler = EventHandler_factory_1.EventHandlerFactory.make();
        eventHandler.handleEvent(metadata[2], metadata[3])
            .catch(reason => { console.error(reason); });
    });
}).catch((reason) => {
    console.error(reason.message);
});
