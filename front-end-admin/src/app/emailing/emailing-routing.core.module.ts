import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  EmailingComponent
} from './emailing.component';
import {
  EmailingCoreRoutes
} from '../emailing-cust/emailing.conf';
@NgModule({
  imports: [RouterModule.forChild(EmailingCoreRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class EmailingRoutingCoreModule {}