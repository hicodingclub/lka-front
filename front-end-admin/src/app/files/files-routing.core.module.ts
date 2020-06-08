import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FilesComponent } from './files.component';
import { FilesCoreRoutes } from '../files-cust/files.conf';

@NgModule({
  imports: [RouterModule.forChild(FilesCoreRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class FilesRoutingCoreModule { }
