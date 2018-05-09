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
    getItem(id, options = {}) {
        return this._http.get(`${this.url}/${id}`, this.getOptions(options));
    }
    /**
     * Post an element
     * @param {?} body Request body
     * @param {?=} options Request options
     * @return {?}
     */
    post(body, options = {}) {
        return this._http.post(this.url, body, this.getOptions(options));
    }
    /**
     * Update an element
     * @param {?} id Element id
     * @param {?} body Request body
     * @param {?=} options Request options
     * @return {?}
     */
    put(id, body, options = {}) {
        return this._http.put(`${this.url}/${id}`, body, this.getOptions(options));
    }
    /**
     * Delete an element
     * @param {?} id Element id
     * @param {?=} options Request options
     * @return {?}
     */
    delete(id, options = {}) {
        options.responseType = 'text';
        return this._http.delete(`${this.url}/${id}?force=true`, this.getOptions(options));
    }
    /**
     * Adds the authentication header and response formatting to the request options
     * @param {?} options Request options
     * @return {?}
     */
    getOptions(options) {
        let /** @type {?} */ headers = options.headers || {};
        if (this.token) {
            headers = Object.assign({}, headers, { Authorization: `Basic ${this.token}` });
        }
        options.headers = new HttpHeaders(headers);
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
        if (!this.postEndpoint) {
            this.postEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/posts`, this.token, this.http);
        }
        return this.postEndpoint;
    }
    /**
     * @return {?}
     */
    comments() {
        if (!this.commentEndpoint) {
            this.commentEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/comments`, this.token, this.http);
        }
        return this.commentEndpoint;
    }
    /**
     * @return {?}
     */
    categories() {
        if (!this.categoryEndpoint) {
            this.categoryEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/categories`, this.token, this.http);
        }
        return this.categoryEndpoint;
    }
    /**
     * @return {?}
     */
    tags() {
        if (!this.tagEndpoint) {
            this.tagEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/tags`, this.token, this.http);
        }
        return this.tagEndpoint;
    }
    /**
     * @return {?}
     */
    pages() {
        if (!this.pageEndpoint) {
            this.pageEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/pages`, this.token, this.http);
        }
        return this.pageEndpoint;
    }
    /**
     * @return {?}
     */
    users() {
        if (!this.userEndpoint) {
            this.userEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/users`, this.token, this.http);
        }
        return this.userEndpoint;
    }
    /**
     * @return {?}
     */
    medias() {
        if (!this.mediaEndpoint) {
            this.mediaEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/media`, this.token, this.http);
        }
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
