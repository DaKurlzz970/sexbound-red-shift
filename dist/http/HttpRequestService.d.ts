import { IHttpRequestService } from "./HttpRequestService.interface";
export declare class HttpRequestService implements IHttpRequestService {
    post(url: string, data?: any, config?: any): Promise<any>;
}
