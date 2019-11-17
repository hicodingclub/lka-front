import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MraRouteReuseStrategy } from '@hicoder/angular-core';

import { EmailingComponent } from './emailing.component';
import { EmailingRoutes } from '../emailing.conf';

@NgModule({
  imports: [RouterModule.forChild(EmailingRoutes)],
  exports: [RouterModule],
  providers: [// only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy },
  ],

})
export class EmailingRoutingModule { }
