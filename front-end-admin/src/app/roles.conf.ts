import { Routes } from '@angular/router';

import { RolesComponent } from './roles/roles.component';

//Import routing paths
import {mroleRoutingPath, mmoduleRoutingPath, mpermissionRoutingPath, maccountRoutingPath, maccountroleRoutingPath,  } from './roles/roles-routing.path';

export const RolesRoutes: Routes = [
  { path: 'roles', 
    component: RolesComponent,
    children: [ 
      {path: '',  redirectTo: 'mrole', pathMatch: 'full'},

      { path: "mrole",
        children: mroleRoutingPath, 
        data: {"mraLevel": 1, "item": "mrole"}
      },
      { path: "mmodule",
        children: mmoduleRoutingPath, 
        data: {"mraLevel": 1, "item": "mmodule"}
      },
      { path: "mpermission",
        children: mpermissionRoutingPath, 
        data: {"mraLevel": 1, "item": "mpermission"}
      },
      { path: "maccount",
        children: maccountRoutingPath, 
        data: {"mraLevel": 1, "item": "maccount"}
      },
      { path: "maccountrole",
        children: maccountroleRoutingPath, 
        data: {"mraLevel": 1, "item": "maccountrole"}
      },
    ]
  }
];

export const roles_server_root_uri:string = "/api/roles";
/*>>> Please check this recent updates and merge with existing ones***
**Date: Mon Dec 23 2019 08:15:35 GMT-0800 (Pacific Standard Time)

import { Routes } from '@angular/router';

import { RolesComponent } from './roles/roles.component';

//Import routing paths
import { mroleRoutingPath, mmoduleRoutingPath, mpermissionRoutingPath, maccountRoutingPath, maccountroleRoutingPath,  } from './roles/roles-routing.path';

export const RolesRoutes: Routes = [
  { path: 'roles',
    component: RolesComponent,
    children: [
      {path: '',  redirectTo: 'mrole', pathMatch: 'full'},

      { path: "mrole",
        children: mroleRoutingPath,
        data: {"mraLevel": 1, "item": "mrole"}
      },
      { path: "mmodule",
        children: mmoduleRoutingPath,
        data: {"mraLevel": 1, "item": "mmodule"}
      },
      { path: "mpermission",
        children: mpermissionRoutingPath,
        data: {"mraLevel": 1, "item": "mpermission"}
      },
      { path: "maccount",
        children: maccountRoutingPath,
        data: {"mraLevel": 1, "item": "maccount"}
      },
      { path: "maccountrole",
        children: maccountroleRoutingPath,
        data: {"mraLevel": 1, "item": "maccountrole"}
      },
    ]
  }
];

export const roles_server_root_uri:string = "/api/roles";
**** End of recent updates.<<<*/
