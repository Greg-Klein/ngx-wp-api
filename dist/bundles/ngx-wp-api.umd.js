(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/common/http', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-wp-api'] = {}),global.ng.common,global.ng.core,global.ng.common));
}(this, (function (exports,http,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This is the base class for a Wp endpoint
 */
var WpEndpointHelper = /** @class */ (function () {
    /**
     * @param {?} endpointUrl
     * @param {?} token
     * @param {?} _http
     */
    function WpEndpointHelper(endpointUrl, token, _http) {
        this._http = _http;
        this.options = {
            headers: {},
            observe: 'body',
            params: new http.HttpParams(),
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
    WpEndpointHelper.prototype.get = function (options) {
        if (options === void 0) { options = this.options; }
        return this._http.get(this.url, this.getOptions(options));
    };
    /**
     * Get a single element
     * @param {?} id Element id
     * @param {?=} options Request options
     * @return {?}
     */
    WpEndpointHelper.prototype.getItem = function (id, options) {
        if (options === void 0) { options = this.options; }
        return this._http.get(this.url + "/" + id, this.getOptions(options));
    };
    /**
     * Post an element
     * @param {?} body Request body
     * @param {?=} options Request options
     * @return {?}
     */
    WpEndpointHelper.prototype.post = function (body, options) {
        if (options === void 0) { options = this.options; }
        return this._http.post(this.url, body, this.getOptions(options));
    };
    /**
     * Update an element
     * @param {?} id Element id
     * @param {?} body Request body
     * @param {?=} options Request options
     * @return {?}
     */
    WpEndpointHelper.prototype.put = function (id, body, options) {
        if (options === void 0) { options = this.options; }
        return this._http.put(this.url + "/" + id, body, this.getOptions(options));
    };
    /**
     * Delete an element
     * @param {?} id Element id
     * @param {?=} options Request options
     * @return {?}
     */
    WpEndpointHelper.prototype.delete = function (id, options) {
        if (options === void 0) { options = this.options; }
        options.responseType = 'text';
        return this._http.delete(this.url + "/" + id + "?force=true", this.getOptions(options));
    };
    /**
     * Adds the authentication header and response formatting to the request options
     * @param {?} options Request options
     * @return {?}
     */
    WpEndpointHelper.prototype.getOptions = function (options) {
        var /** @type {?} */ headers = options.headers || {};
        if (this.token) {
            headers = Object.assign({}, headers, { Authorization: "Basic " + this.token });
        }
        options.headers = new http.HttpHeaders(headers);
        options.observe = 'response';
        return options;
    };
    return WpEndpointHelper;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This is the service responsible for generating Wp endpoints
 */
var WpEndpointsService = /** @class */ (function () {
    /**
     * @param {?} rootUrl
     * @param {?} http
     */
    function WpEndpointsService(rootUrl, http$$1) {
        this.rootUrl = rootUrl;
        this.http = http$$1;
    }
    /**
     * @param {?} token
     * @return {?}
     */
    WpEndpointsService.prototype.setAuthToken = function (token) {
        this.token = token;
    };
    /**
     * @return {?}
     */
    WpEndpointsService.prototype.posts = function () {
        if (!this.postEndpoint) {
            this.postEndpoint = new WpEndpointHelper(this.rootUrl + "/wp-json/wp/v2/posts", this.token, this.http);
        }
        return this.postEndpoint;
    };
    /**
     * @return {?}
     */
    WpEndpointsService.prototype.comments = function () {
        if (!this.commentEndpoint) {
            this.commentEndpoint = new WpEndpointHelper(this.rootUrl + "/wp-json/wp/v2/comments", this.token, this.http);
        }
        return this.commentEndpoint;
    };
    /**
     * @return {?}
     */
    WpEndpointsService.prototype.categories = function () {
        if (!this.categoryEndpoint) {
            this.categoryEndpoint = new WpEndpointHelper(this.rootUrl + "/wp-json/wp/v2/categories", this.token, this.http);
        }
        return this.categoryEndpoint;
    };
    /**
     * @return {?}
     */
    WpEndpointsService.prototype.tags = function () {
        if (!this.tagEndpoint) {
            this.tagEndpoint = new WpEndpointHelper(this.rootUrl + "/wp-json/wp/v2/tags", this.token, this.http);
        }
        return this.tagEndpoint;
    };
    /**
     * @return {?}
     */
    WpEndpointsService.prototype.pages = function () {
        if (!this.pageEndpoint) {
            this.pageEndpoint = new WpEndpointHelper(this.rootUrl + "/wp-json/wp/v2/pages", this.token, this.http);
        }
        return this.pageEndpoint;
    };
    /**
     * @return {?}
     */
    WpEndpointsService.prototype.users = function () {
        if (!this.userEndpoint) {
            this.userEndpoint = new WpEndpointHelper(this.rootUrl + "/wp-json/wp/v2/users", this.token, this.http);
        }
        return this.userEndpoint;
    };
    /**
     * @return {?}
     */
    WpEndpointsService.prototype.medias = function () {
        if (!this.mediaEndpoint) {
            this.mediaEndpoint = new WpEndpointHelper(this.rootUrl + "/wp-json/wp/v2/media", this.token, this.http);
        }
        return this.mediaEndpoint;
    };
    return WpEndpointsService;
}());
WpEndpointsService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
WpEndpointsService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: ['rootUrl',] },] },
    { type: http.HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxWpApiModule = /** @class */ (function () {
    function NgxWpApiModule() {
    }
    /**
     * @param {?} rootUrl
     * @return {?}
     */
    NgxWpApiModule.forRoot = function (rootUrl) {
        return {
            ngModule: NgxWpApiModule,
            providers: [WpEndpointsService, { provide: 'rootUrl', useValue: rootUrl }]
        };
    };
    return NgxWpApiModule;
}());
NgxWpApiModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [],
                exports: []
            },] },
];

exports.WpEndpointHelper = WpEndpointHelper;
exports.WpEndpointsService = WpEndpointsService;
exports.NgxWpApiModule = NgxWpApiModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-wp-api.umd.js.map
