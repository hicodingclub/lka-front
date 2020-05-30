import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ],

  exports: [
    HomeComponent
  ],
  entryComponents: [

  ]
})
export class HomeModule { }
