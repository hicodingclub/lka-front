import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EventComponent } from './event/event.component';
import { HomeComponent } from './home.component';
import { HotClassesComponent } from './hot_classes/hot_classes.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { StaffComponent } from './Staff/staff.component';

import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    HotClassesComponent,
    EventComponent,
    HomeComponent,
    IntroductionComponent,
    StaffComponent
  ],
  providers: [
  ],

  exports: [
    HotClassesComponent,
    EventComponent,
    HomeComponent,
    IntroductionComponent,
    StaffComponent
  ],
  entryComponents: [

  ]
})
export class HomeModule { }
