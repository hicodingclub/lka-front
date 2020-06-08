import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { EmailingRoutes } from '../emailing-cust/emailing.conf';

@NgModule({
  imports: [RouterModule.forChild(EmailingRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class EmailingRoutingModule { }
