"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
let ButtplugBLEManager = require("buttplug-node-bluetoothle-manager");
const ConfigValidator_factory_1 = require("./config-validator/ConfigValidator.factory");
const Watcher_factory_1 = require("./watcher/Watcher.factory");
const EventHandler_factory_1 = require("./event-handler/EventHandler.factory");
const buttplug_1 = require("buttplug");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let bpClient = new buttplug_1.ButtplugClient("Generic Buttplug Client");
        let connector = new buttplug_1.ButtplugEmbeddedClientConnector();
        connector.Server = new buttplug_1.ButtplugServer();
        connector.Server.AddDeviceManager(new buttplug_1.TestDeviceSubtypeManager);
        let bpDevice = [];
        yield bpClient.Connect(connector);
        bpClient.addListener("deviceadded", (device) => __awaiter(this, void 0, void 0, function* () {
            bpDevice.push(device);
            yield bpClient.Devices[0].SendVibrateCmd(1.0);
        }));
        yield bpClient.StartScanning();
        yield bpClient.StopScanning();
    });
})();
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
