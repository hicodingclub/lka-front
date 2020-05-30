import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { AccessComponent } from './access.component';
import { AccessCoreRoutes } from '../access-cust/access.conf';

@NgModule({
  imports: [RouterModule.forChild(AccessCoreRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class AccessRoutingCoreModule { }
