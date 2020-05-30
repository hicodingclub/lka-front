import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { FilesComponent } from './files.component';
import { FilesCoreRoutes } from '../files-cust/files.conf';

@NgModule({
  imports: [RouterModule.forChild(FilesCoreRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class FilesRoutingCoreModule { }
