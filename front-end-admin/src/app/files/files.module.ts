import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './files.directive';




import { MraModule } from 'mean-rest-angular';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component';


import { Files_SERVER_ROOT_URI } from './files.tokens';
import { files_server_root_uri } from '../files.conf';

// Import components for each schema

import { MfileListComponent } from './mfile/mfile-list/mfile-list.component';

import { MfileEditComponent } from './mfile/mfile-edit/mfile-edit.component';
import { MfileService } from './mfile/mfile.service';

import { MfilelabelsListComponent } from './mfilelabels/mfilelabels-list/mfilelabels-list.component';


import { MfilelabelsService } from './mfilelabels/mfilelabels.service';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    NgbModule,
    MraModule,

    FilesRoutingModule
  ],
  declarations: [
    FilesComponent,
    

    MfileListComponent,
    
    MfileEditComponent,
    MfilelabelsListComponent,
    
    






  ],
  exports: [
    FilesComponent,

    MfileListComponent,
    
    MfileEditComponent,
    MfilelabelsListComponent,
    
    


  ],
  providers: [
    { provide: Files_SERVER_ROOT_URI, useValue: files_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    MfileService,
    MfilelabelsService,
  ],

})
export class FilesModule { }
