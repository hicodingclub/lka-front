import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { FilesRoutes } from '../files-cust/files.conf';

@NgModule({
  imports: [RouterModule.forChild(FilesRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class FilesRoutingModule { }
