import { Routes } from '@angular/router';

import { ManageComponent } from './manage/manage.component';

//Import routing paths
import {eventRoutingPath,  } from './manage/manage-routing.path';

export const ManageRoutes: Routes = [
  { path: 'manage', 
    component: ManageComponent,
    children: [ 
      {path: '',  redirectTo: 'event', pathMatch: 'full'},

      {path: "event",  children: eventRoutingPath, 
         data: {"mraLevel": 1, "item": "event"}},
    ]
  }
];
