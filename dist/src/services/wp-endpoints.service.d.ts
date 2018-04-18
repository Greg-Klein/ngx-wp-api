/**
 * This is the service responsible for generating Wp endpoints
 */
import { HttpClient } from '@angular/common/http';
import { WpEndpointHelper } from './wp-endpoint.helper';
export declare class WpEndpointsService {
    private rootUrl;
    private http;
    private token;
    private postEndpoint;
    private commentEndpoint;
    private categoryEndpoint;
    private tagEndpoint;
    private pageEndpoint;
    private userEndpoint;
    private mediaEndpoint;
    constructor(rootUrl: string, http: HttpClient);
    setAuthToken(token: string): void;
    posts(): WpEndpointHelper;
    comments(): WpEndpointHelper;
    categories(): WpEndpointHelper;
    tags(): WpEndpointHelper;
    pages(): WpEndpointHelper;
    users(): WpEndpointHelper;
    medias(): WpEndpointHelper;
}
