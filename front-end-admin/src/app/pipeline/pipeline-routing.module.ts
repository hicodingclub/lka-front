import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MraRouteReuseStrategy } from 'mean-rest-angular';

import { PipelineComponent } from './pipeline.component';
import { PipelineRoutes } from '../pipeline.conf';

@NgModule({
  imports: [RouterModule.forChild(PipelineRoutes)],
  exports: [RouterModule],
  providers: [// only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy },
  ],

})
export class PipelineRoutingModule { }
