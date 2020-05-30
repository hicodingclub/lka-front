import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { RolesRoutes } from '../roles-cust/roles.conf';

@NgModule({
  imports: [RouterModule.forChild(RolesRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class RolesRoutingModule { }
