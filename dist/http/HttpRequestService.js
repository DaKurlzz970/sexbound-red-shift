"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestService = void 0;
const axios_1 = require("axios");
class HttpRequestService {
    post(url, data, config) {
        return axios_1.default.post(url, data, config);
    }
}
exports.HttpRequestService = HttpRequestService;
