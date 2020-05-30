import { NgModule } from '@angular/core';
import { EmailingRoutingModule } from './emailing-routing.module';
import { EmailingCoreModule } from './emailing.core.module';
import { EmailingCustModule } from '../emailing-cust/emailing.cust.module'

@NgModule({
  imports: [
    EmailingRoutingModule,
    EmailingCoreModule,
    EmailingCustModule,
  ],
  declarations: [
  ],
  exports: [
    EmailingCoreModule,
    EmailingCustModule,
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class EmailingModule { }
