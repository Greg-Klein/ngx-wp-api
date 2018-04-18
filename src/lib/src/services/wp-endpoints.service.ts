/**
 * This is the service responsible for generating Wp endpoints
 */

import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { WpEndpointHelper } from './wp-endpoint.helper';

@Injectable()
export class WpEndpointsService {
  private token: string;

  private postEndpoint: WpEndpointHelper;
  private commentEndpoint: WpEndpointHelper;
  private categoryEndpoint: WpEndpointHelper;
  private tagEndpoint: WpEndpointHelper;
  private pageEndpoint: WpEndpointHelper;
  private userEndpoint: WpEndpointHelper;
  private mediaEndpoint: WpEndpointHelper;

  constructor(@Inject('rootUrl') private rootUrl: string, private http: HttpClient) {
    // Generate all the WP endpoints
    this.postEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/posts`, this.token, this.http);
    this.commentEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/comments`, this.token, this.http);
    this.categoryEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/categories`, this.token, this.http);
    this.tagEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/tags`, this.token, this.http);
    this.pageEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/pages`, this.token, this.http);
    this.userEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/users`, this.token, this.http);
    this.mediaEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/media`, this.token, this.http);
  }

  setAuthToken(token: string) {
    this.token = token;
  }

  posts(): WpEndpointHelper {
    return this.postEndpoint;
  }

  comments(): WpEndpointHelper {
    return this.commentEndpoint;
  }

  categories(): WpEndpointHelper {
    return this.categoryEndpoint;
  }

  tags(): WpEndpointHelper {
    return this.tagEndpoint;
  }

  pages(): WpEndpointHelper {
    return this.pageEndpoint;
  }

  users(): WpEndpointHelper {
    return this.userEndpoint;
  }

  medias(): WpEndpointHelper {
    return this.mediaEndpoint;
  }
}
