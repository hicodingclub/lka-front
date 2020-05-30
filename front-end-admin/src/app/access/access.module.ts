import { NgModule } from '@angular/core';
import { AccessRoutingModule } from './access-routing.module';
import { AccessCoreModule } from './access.core.module';
import { AccessCustModule } from '../access-cust/access.cust.module'

@NgModule({
  imports: [
    AccessRoutingModule,
    AccessCoreModule,
    AccessCustModule,
  ],
  declarations: [
  ],
  exports: [
    AccessCoreModule,
    AccessCustModule,
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class AccessModule { }
