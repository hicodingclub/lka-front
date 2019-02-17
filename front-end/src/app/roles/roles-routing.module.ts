import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MraRouteReuseStrategy } from 'mean-rest-angular';

import { RolesComponent } from './roles.component';
import { RolesRoutes } from '../roles.conf';

@NgModule({
  imports: [RouterModule.forChild(RolesRoutes)],
  exports: [RouterModule],
  providers: [// only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy },
  ],

})
export class RolesRoutingModule { }
