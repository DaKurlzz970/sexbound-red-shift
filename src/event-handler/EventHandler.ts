import { IEventHandler } from './EventHandler.interface'
import { IHttpRequestService } from '../http/HttpRequestService.interface'
const config = require('../../config.json')

export class EventHandler implements IEventHandler {
  httpRequestService: IHttpRequestService

  public constructor(httpRequestService: IHttpRequestService) {
    this.httpRequestService = httpRequestService
  }

  public handleEvent(eventName: string, eventArgs: any): Promise<any> {
    /*return this.httpRequestService.post(
      `${config.api_url}/record`,
      this.buildRequestData(eventName, eventArgs),
      this.buildRequestConfig()
    )*/
    return Promise.resolve()
  }

  private buildRequestData(eventName: string, eventArgs: any) {
    return { eventName: eventName, eventArgs: eventArgs }
  }

  private buildRequestConfig() {
    return { headers: { "X-API-KEY": config.api_key }}
  }
}