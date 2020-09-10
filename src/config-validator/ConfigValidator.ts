import { IConfigValidator } from "./ConfigValidator.interface"

export class ConfigValidator implements IConfigValidator {
  config: any
  constructor(config?: any) {
    this.config = config || require("../../config.json")
  }

  public async validate(): Promise<void> {
    await this.validateStarboundLogFilePath()
  }

  private validateStarboundLogFilePath(): Promise<void> {
    return (this.config.starbound_log_file_path) ? Promise.resolve() : 
      Promise.reject(new Error("starbound_log_file_path has not been set in the config.json file!"))
  }
}