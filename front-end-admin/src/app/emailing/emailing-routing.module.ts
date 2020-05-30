import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { EmailingRoutes } from '../emailing-cust/emailing.conf';

@NgModule({
  imports: [RouterModule.forChild(EmailingRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class EmailingRoutingModule { }
