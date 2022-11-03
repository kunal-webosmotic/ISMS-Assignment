import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

export interface IHttpOptions {
  headers: any;
  params: any;
  observe: any;
  responseType: any;
  reportProgress: boolean;
  withCredentials: boolean;
  isRawUrl?: boolean;
}

export type IHttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface IHttpRequestOptions extends IHttpOptions {
  body: Object;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) {
  }

  get<T>(url: string, options?: Partial<IHttpOptions>) {
    return this.httpClient.get<T>(this.buildUrl(url, options?.isRawUrl), this.buildOptions(options)).toPromise();
  }

  post<T>(url: string, body: any, options?: Partial<IHttpOptions>) {
    return this.httpClient
      .post<T>(this.buildUrl(url, options?.isRawUrl), body, this.buildOptions(options)).toPromise();
  }

  request<T>(method: IHttpMethod, url: string, options?: Partial<IHttpRequestOptions>) {
    return this.httpClient
      .request<T>(method, this.buildUrl(url, options?.isRawUrl), options).toPromise();
  }

  private buildUrl(url: string, isRawUrl = false): string {
    return isRawUrl ? url : `${this.baseUrl}${url}`;
  }

  private buildOptions(options?: Partial<IHttpOptions>): Partial<IHttpOptions> {
    return options || {};
  }
}
