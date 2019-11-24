import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';

//Import routing paths
import {muserRoutingPath,  } from './users/users-routing.path';

export const UsersRoutes: Routes = [
  { path: 'users', 
    component: UsersComponent,
    children: [ 
      {path: '',  redirectTo: 'muser', pathMatch: 'full'},

      { path: "muser",
        children: muserRoutingPath, 
        data: {"mraLevel": 1, "item": "muser"}
      },
    ]
  }
];

export const users_server_root_uri:string = "/api/users";/*>>> Please check this recent updates and merge with existing ones***
**Date: Sat Nov 23 2019 22:35:05 GMT-0800 (Pacific Standard Time)

import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';

//Import routing paths
import { muserRoutingPath,  } from './users/users-routing.path';

export const UsersRoutes: Routes = [
  { path: 'users',
    component: UsersComponent,
    children: [
      {path: '',  redirectTo: 'muser', pathMatch: 'full'},

      { path: "muser",
        children: muserRoutingPath,
        data: {"mraLevel": 1, "item": "muser"}
      },
    ]
  }
];

export const users_server_root_uri:string = "/api/users";
**** End of recent updates.<<<*/
