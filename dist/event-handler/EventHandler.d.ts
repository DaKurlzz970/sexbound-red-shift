import { IEventHandler } from './EventHandler.interface';
import { IHttpRequestService } from '../http/HttpRequestService.interface';
export declare class EventHandler implements IEventHandler {
    httpRequestService: IHttpRequestService;
    constructor(httpRequestService: IHttpRequestService);
    handleEvent(eventName: string, eventArgs: any): Promise<any>;
    private buildRequestData;
    private buildRequestConfig;
}
