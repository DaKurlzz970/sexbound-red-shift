"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigValidatorFactory = void 0;
const ConfigValidator_1 = require("./ConfigValidator");
class ConfigValidatorFactory {
    static make() {
        return new ConfigValidator_1.ConfigValidator;
    }
}
exports.ConfigValidatorFactory = ConfigValidatorFactory;
