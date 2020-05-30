import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { EmailingComponent } from './emailing.component';
import { EmailingCoreRoutes } from '../emailing-cust/emailing.conf';

@NgModule({
  imports: [RouterModule.forChild(EmailingCoreRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class EmailingRoutingCoreModule { }
