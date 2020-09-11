import { IConfigValidator } from "./ConfigValidator.interface";
export declare class ConfigValidator implements IConfigValidator {
    validate(): Promise<void>;
    private validateStarboundLogFilePath;
}
