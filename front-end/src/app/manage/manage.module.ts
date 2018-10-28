import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap'; 
import { MraNgbDateFormatterService } from './manage.directive';

import { MraModule } from 'mean-rest-angular';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';


//Import components for each schema

import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventService } from './event/event.service';




  
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    
    NgbModule,
    MraModule,
    
    ManageRoutingModule
  ],
  declarations: [
    ManageComponent,
    

    EventListComponent, 
    EventDetailComponent, 
    EventEditComponent,



  ],
  exports: [
    ManageComponent,

    EventListComponent,
    EventDetailComponent,
    EventEditComponent,


  ],
  providers: [
    
    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    EventService,
  ],

})
export class ManageModule { }
