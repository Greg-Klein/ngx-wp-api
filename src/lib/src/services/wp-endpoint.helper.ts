/**
 * This is the base class for a Wp endpoint
 */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class WpEndpointHelper {
  url: string;
  token: string;
  options = {
    headers: {},
    observe: 'body',
    params: new HttpParams(),
    responseType: 'json'
  };

  constructor(endpointUrl: string, token: string, private _http: HttpClient) {
    this.url = endpointUrl;
    this.token = token;
  }

  /**
   * Get a collection of elements
   * @param options Request options
   */
  get(options: any = this.options): Observable<any> {
    return this._http.get(this.url, this.getOptions(options));
  }

  /**
   * Get a single element
   * @param id Element id
   * @param options Request options
   */
  getItem(id: number, options: any = {}): Observable<any> {
    return this._http.get(`${this.url}/${id}`, this.getOptions(options));
  }

  /**
   * Post an element
   * @param body Request body
   * @param options Request options
   */
  post(body: any, options: any = this.options): Observable<any> {
    return this._http.post(this.url, body, this.getOptions(options));
  }

  /**
   * Update an element
   * @param id Element id
   * @param body Request body
   * @param options Request options
   */
  put(id: number, body: any, options: any = this.options): Observable<any> {
    return this._http.put(`${this.url}/${id}`, body, this.getOptions(options));
  }

  /**
   * Delete an element
   * @param id Element id
   * @param options Request options
   */
  delete(id: number, options: any = this.options): Observable<any> {
    options.responseType = 'text';
    return this._http.delete(`${this.url}/${id}?force=true`, this.getOptions(options));
  }

  /* --- Utils --- */

  /**
   * Adds the authentication header and response formatting to the request options
   * @param options Request options
   */
  getOptions(options: any): any {
    let headers = options.headers || {};

    if (this.token) {
      headers = { ...headers, Authorization: `Basic ${this.token}` };
    }

    options.headers = new HttpHeaders(headers);
    options.observe = 'response';
    return options;
  }
}
