import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { PublicinfoComponent } from './publicinfo.component';
import { PublicinfoRoutes } from '../publicinfo.conf';

@NgModule({
  imports: [RouterModule.forChild(PublicinfoRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class PublicinfoRoutingModule { }
