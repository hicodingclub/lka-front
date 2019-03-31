import { Routes } from '@angular/router';

import { PublicinfoComponent } from './publicinfo/publicinfo.component';

//Import routing paths
import {generalinfoRoutingPath,  } from './publicinfo/publicinfo-routing.path';

export const PublicinfoRoutes: Routes = [
  { path: 'publicinfo', 
    component: PublicinfoComponent,
    children: [ 
      {path: '',  redirectTo: 'generalinfo', pathMatch: 'full'},

      { path: "generalinfo",
        children: generalinfoRoutingPath, 
        data: {"mraLevel": 1, "item": "generalinfo"}
      },
    ]
  }
];

export const publicinfo_server_root_uri:string = "/api/publicinfo";/*>>> Please check this recent updates and merge with existing ones***
**Date: Sat Mar 30 2019 23:18:11 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { PublicinfoComponent } from './publicinfo/publicinfo.component';

//Import routing paths
import {generalinfoRoutingPath, eventRoutingPath,  } from './publicinfo/publicinfo-routing.path';

export const PublicinfoRoutes: Routes = [
  { path: 'publicinfo', 
    component: PublicinfoComponent,
    children: [ 
      {path: '',  redirectTo: 'generalinfo', pathMatch: 'full'},

      { path: "generalinfo",
        children: generalinfoRoutingPath, 
        data: {"mraLevel": 1, "item": "generalinfo"}
      },
      { path: "event",
        children: eventRoutingPath, 
        data: {"mraLevel": 1, "item": "event"}
      },
    ]
  }
];

export const publicinfo_server_root_uri:string = "/api/publicinfo";**** End of recent updates.<<<*/
