import { IConfigValidator } from "./ConfigValidator.interface";
export declare class ConfigValidator implements IConfigValidator {
    config: any;
    constructor(config?: any);
    validate(): Promise<void>;
    private validateStarboundLogFilePath;
}
