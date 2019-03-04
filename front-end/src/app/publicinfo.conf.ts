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
**Date: Sun Mar 03 2019 21:02:03 GMT-0800 (PST)

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

export const publicinfo_server_root_uri:string = "/api/publicinfo";**** End of recent updates.<<<*/
