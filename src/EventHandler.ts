import { default as axios } from 'axios'
const config = require('../config.json')

export class EventHandler {
  public static handleEvent(eventName: string, eventArgs: any) {
    axios.post(
      `${config.api_url}/record`,
      EventHandler.buildRequestData(eventName, eventArgs),
      EventHandler.buildRequestConfig()
    ).catch(reason => { console.error(reason) })
  }

  private static buildRequestData(eventName: string, eventArgs: any) {
    return { eventName: eventName, eventArgs: eventArgs }
  }

  private static buildRequestConfig() {
    return {
      headers: { "X-API-KEY": config.api_key }
    }
  }
}