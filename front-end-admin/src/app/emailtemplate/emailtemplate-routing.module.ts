import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MraRouteReuseStrategy } from 'mean-rest-angular';

import { EmailtemplateComponent } from './emailtemplate.component';
import { EmailtemplateRoutes } from '../emailtemplate.conf';

@NgModule({
  imports: [RouterModule.forChild(EmailtemplateRoutes)],
  exports: [RouterModule],
  providers: [// only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy },
  ],

})
export class EmailtemplateRoutingModule { }
