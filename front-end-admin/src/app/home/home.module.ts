import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
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
