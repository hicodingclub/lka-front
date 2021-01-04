import {
  NgModule
} from '@angular/core';
import {
  PublicinfoRoutingModule
} from './publicinfo-routing.module';
import {
  PublicinfoCoreModule
} from './publicinfo.core.module';
import {
  PublicinfoCustModule
} from '../publicinfo-cust/publicinfo.cust.module'
@NgModule({
  imports: [
    PublicinfoRoutingModule,
    PublicinfoCoreModule,
    PublicinfoCustModule,
  ],
  declarations: [],
  exports: [
    PublicinfoCoreModule,
    PublicinfoCustModule,
  ],
  providers: [],
  entryComponents: []
})
export class PublicinfoModule {}