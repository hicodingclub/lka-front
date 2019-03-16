import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { Files_SERVER_ROOT_URI } from './files.tokens';
import { files_server_root_uri } from '../files.conf';

import { MFilesService } from './files.service';
import { MFilesComponent } from './files.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

  ],
  declarations: [
    MFilesComponent,
    
  ],
  exports: [
    MFilesComponent,

  ],
  providers: [
    { provide: Files_SERVER_ROOT_URI, useValue: files_server_root_uri },
    MFilesService,
  ],

})
export class MFilesModule { }
