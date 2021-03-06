import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This is the base class for a Wp endpoint
 */
class WpEndpointHelper {
    /**
     * @param {?} endpointUrl
     * @param {?} token
     * @param {?} _http
     */
    constructor(endpointUrl, token, _http) {
        this._http = _http;
        this.options = {
            headers: {},
            observe: 'body',
            params: new HttpParams(),
            responseType: 'json'
        };
        this.url = endpointUrl;
        this.token = token;
    }
    /**
     * Get a collection of elements
     * @param {?=} options Request options
     * @return {?}
     */
    get(options = this.options) {
        return this._http.get(this.url, this.getOptions(options));
    }
    /**
     * Get a single element
     * @param {?} id Element id
     * @param {?=} options Request options
     * @return {?}
     */
    getItem(id, options = this.options) {
        return this._http.get(`${this.url}/${id}`, this.getOptions(options));
    }
    /**
     * Post an element
     * @param {?} body Request body
     * @param {?=} options Request options
     * @return {?}
     */
    post(body, options = this.options) {
        return this._http.post(this.url, body, this.getOptions(options));
    }
    /**
     * Update an element
     * @param {?} id Element id
     * @param {?} body Request body
     * @param {?=} options Request options
     * @return {?}
     */
    put(id, body, options = this.options) {
        return this._http.put(`${this.url}/${id}`, body, this.getOptions(options));
    }
    /**
     * Delete an element
     * @param {?} id Element id
     * @param {?=} options Request options
     * @return {?}
     */
    delete(id, options = this.options) {
        options.responseType = 'text';
        return this._http.delete(`${this.url}/${id}?force=true`, this.getOptions(options));
    }
    /**
     * Adds the authentication header and response formatting to the request options
     * @param {?} options Request options
     * @return {?}
     */
    getOptions(options) {
        if (this.token) {
            options.headers = new HttpHeaders().set('Authorization', `Basic ${this.token}`);
        }
        options.observe = 'response';
        return options;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This is the service responsible for generating Wp endpoints
 */
class WpEndpointsService {
    /**
     * @param {?} rootUrl
     * @param {?} http
     */
    constructor(rootUrl, http$$1) {
        this.rootUrl = rootUrl;
        this.http = http$$1;
        // Generate all the WP endpoints
        this.postEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/posts`, this.token, this.http);
        this.commentEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/comments`, this.token, this.http);
        this.categoryEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/categories`, this.token, this.http);
        this.tagEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/tags`, this.token, this.http);
        this.pageEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/pages`, this.token, this.http);
        this.userEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/users`, this.token, this.http);
        this.mediaEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/media`, this.token, this.http);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    setAuthToken(token) {
        this.token = token;
    }
    /**
     * @return {?}
     */
    posts() {
        return this.postEndpoint;
    }
    /**
     * @return {?}
     */
    comments() {
        return this.commentEndpoint;
    }
    /**
     * @return {?}
     */
    categories() {
        return this.categoryEndpoint;
    }
    /**
     * @return {?}
     */
    tags() {
        return this.tagEndpoint;
    }
    /**
     * @return {?}
     */
    pages() {
        return this.pageEndpoint;
    }
    /**
     * @return {?}
     */
    users() {
        return this.userEndpoint;
    }
    /**
     * @return {?}
     */
    medias() {
        return this.mediaEndpoint;
    }
}
WpEndpointsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WpEndpointsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['rootUrl',] },] },
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxWpApiModule {
    /**
     * @param {?} rootUrl
     * @return {?}
     */
    static forRoot(rootUrl) {
        return {
            ngModule: NgxWpApiModule,
            providers: [WpEndpointsService, { provide: 'rootUrl', useValue: rootUrl }]
        };
    }
}
NgxWpApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [],
                exports: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { WpEndpointHelper, WpEndpointsService, NgxWpApiModule };
//# sourceMappingURL=ngx-wp-api.js.map
