import {
  NgModule
} from '@angular/core';
import {
  FilesRoutingModule
} from './files-routing.module';
import {
  FilesCoreModule
} from './files.core.module';
import {
  FilesCustModule
} from '../files-cust/files.cust.module'
@NgModule({
  imports: [
    FilesRoutingModule,
    FilesCoreModule,
    FilesCustModule,
  ],
  declarations: [],
  exports: [
    FilesCoreModule,
    FilesCustModule,
  ],
  providers: [],
  entryComponents: []
})
export class FilesModule {}