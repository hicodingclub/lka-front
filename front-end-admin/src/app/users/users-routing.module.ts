import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MraRouteReuseStrategy } from 'mean-rest-angular';

import { UsersComponent } from './users.component';
import { UsersRoutes } from '../users.conf';

@NgModule({
  imports: [RouterModule.forChild(UsersRoutes)],
  exports: [RouterModule],
  providers: [// only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy },
  ],

})
export class UsersRoutingModule { }
