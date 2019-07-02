import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomepageComponent } from './homepage/homepage.component'
import { pipelinePath } from './pipelines';

const routes: Routes = [
    { path: '', component: HomepageComponent },
	  { path: "process", children: pipelinePath },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
