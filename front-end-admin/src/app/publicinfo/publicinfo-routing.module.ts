import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MraRouteReuseStrategy } from 'mean-rest-angular';

import { PublicinfoComponent } from './publicinfo.component';
import { PublicinfoRoutes } from '../publicinfo.conf';

@NgModule({
  imports: [RouterModule.forChild(PublicinfoRoutes)],
  exports: [RouterModule],
  providers: [// only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy },
  ],

})
export class PublicinfoRoutingModule { }
