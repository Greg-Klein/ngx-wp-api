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

  constructor(@Inject('rootUrl') private rootUrl: string, private http: HttpClient) {}

  setAuthToken(token: string) {
    this.token = token;
  }

  posts(): WpEndpointHelper {
    if (!this.postEndpoint) {
      this.postEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/posts`, this.token, this.http);
    }
    return this.postEndpoint;
  }

  comments(): WpEndpointHelper {
    if (!this.commentEndpoint) {
      this.commentEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/comments`, this.token, this.http);
    }
    return this.commentEndpoint;
  }

  categories(): WpEndpointHelper {
    if (!this.categoryEndpoint) {
      this.categoryEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/categories`, this.token, this.http);
    }
    return this.categoryEndpoint;
  }

  tags(): WpEndpointHelper {
    if (!this.tagEndpoint) {
      this.tagEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/tags`, this.token, this.http);
    }
    return this.tagEndpoint;
  }

  pages(): WpEndpointHelper {
    if (!this.pageEndpoint) {
      this.pageEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/pages`, this.token, this.http);
    }
    return this.pageEndpoint;
  }

  users(): WpEndpointHelper {
    if (!this.userEndpoint) {
      this.userEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/users`, this.token, this.http);
    }
    return this.userEndpoint;
  }

  medias(): WpEndpointHelper {
    if (!this.mediaEndpoint) {
      this.mediaEndpoint = new WpEndpointHelper(`${this.rootUrl}/wp-json/wp/v2/media`, this.token, this.http);
    }
    return this.mediaEndpoint;
  }
}
