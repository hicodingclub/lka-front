import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EventComponent } from './event/event.component';
import { HomeComponent } from './home.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    EventComponent,
    HomeComponent
  ],
  providers: [
  ],

  exports: [
    EventComponent,
    HomeComponent
  ],
  entryComponents: [

  ]
})
export class HomeModule { }
