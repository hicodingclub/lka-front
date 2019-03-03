import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MraRouteReuseStrategy } from 'mean-rest-angular';

import { AcademicsComponent } from './academics.component';
import { AcademicsRoutes } from '../academics.conf';

@NgModule({
  imports: [RouterModule.forChild(AcademicsRoutes)],
  exports: [RouterModule],
  providers: [// only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy },
  ],

})
export class AcademicsRoutingModule { }
