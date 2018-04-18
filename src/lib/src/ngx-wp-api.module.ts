import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpEndpointsService } from './services/wp-endpoints.service';

export * from './services/wp-endpoints.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: []
})
export class NgxWpApiModule {
  static forRoot(rootUrl: string): ModuleWithProviders {
    return {
      ngModule: NgxWpApiModule,
      providers: [WpEndpointsService, { provide: 'rootUrl', useValue: rootUrl }]
    };
  }
}
