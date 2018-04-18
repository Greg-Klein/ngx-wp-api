/**
 * This is the base class for a Wp endpoint
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
export declare class WpEndpointHelper {
    private _http;
    url: string;
    token: string;
    options: {
        headers: {};
        observe: string;
        params: HttpParams;
        responseType: string;
    };
    constructor(endpointUrl: string, token: string, _http: HttpClient);
    /**
     * Get a collection of elements
     * @param options Request options
     */
    get(options?: any): Observable<any>;
    /**
     * Get a single element
     * @param id Element id
     * @param options Request options
     */
    getItem(id: number, options?: any): Observable<any>;
    /**
     * Post an element
     * @param body Request body
     * @param options Request options
     */
    post(body: any, options?: any): Observable<any>;
    /**
     * Update an element
     * @param id Element id
     * @param body Request body
     * @param options Request options
     */
    put(id: number, body: any, options?: any): Observable<any>;
    /**
     * Delete an element
     * @param id Element id
     * @param options Request options
     */
    delete(id: number, options?: any): Observable<any>;
    /**
     * Adds the authentication header and response formatting to the request options
     * @param options Request options
     */
    getOptions(options: any): any;
}
