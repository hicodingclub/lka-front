import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MraRouteReuseStrategy } from '@hicoder/angular-core';

import { FilesComponent } from './files.component';
import { FilesRoutes } from '../files.conf';

@NgModule({
  imports: [RouterModule.forChild(FilesRoutes)],
  exports: [RouterModule],
  providers: [// only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy },
  ],

})
export class FilesRoutingModule { }
