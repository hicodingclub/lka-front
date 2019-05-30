import { Routes } from '@angular/router';

import { AccessComponent } from './access/access.component';

//Import routing paths
import {musergroupRoutingPath, mpubmoduleRoutingPath, mpubaccessRoutingPath,  } from './access/access-routing.path';

export const AccessRoutes: Routes = [
  { path: 'access', 
    component: AccessComponent,
    children: [ 
      {path: '',  redirectTo: 'musergroup', pathMatch: 'full'},

      { path: "musergroup",
        children: musergroupRoutingPath, 
        data: {"mraLevel": 1, "item": "musergroup"}
      },
      { path: "mpubmodule",
        children: mpubmoduleRoutingPath, 
        data: {"mraLevel": 1, "item": "mpubmodule"}
      },
      { path: "mpubaccess",
        children: mpubaccessRoutingPath, 
        data: {"mraLevel": 1, "item": "mpubaccess"}
      },
    ]
  }
];

export const access_server_root_uri:string = "/api/access";/*>>> Please check this recent updates and merge with existing ones***
**Date: Thu May 30 2019 09:51:26 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { AccessComponent } from './access/access.component';

//Import routing paths
import {musergroupRoutingPath, mpubmoduleRoutingPath, mpubaccessRoutingPath,  } from './access/access-routing.path';

export const AccessRoutes: Routes = [
  { path: 'access', 
    component: AccessComponent,
    children: [ 
      {path: '',  redirectTo: 'musergroup', pathMatch: 'full'},

      { path: "musergroup",
        children: musergroupRoutingPath, 
        data: {"mraLevel": 1, "item": "musergroup"}
      },
      { path: "mpubmodule",
        children: mpubmoduleRoutingPath, 
        data: {"mraLevel": 1, "item": "mpubmodule"}
      },
      { path: "mpubaccess",
        children: mpubaccessRoutingPath, 
        data: {"mraLevel": 1, "item": "mpubaccess"}
      },
    ]
  }
];

export const access_server_root_uri:string = "/api/access";**** End of recent updates.<<<*/
