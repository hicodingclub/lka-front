import { Routes } from '@angular/router';

import { RolesComponent } from './roles/roles.component';

//Import routing paths
import {mroleRoutingPath, mmoduleRoutingPath, mpermissionRoutingPath, muserRoutingPath, muserroleRoutingPath,  } from './roles/roles-routing.path';

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
      { path: "muser",
        children: muserRoutingPath, 
        data: {"mraLevel": 1, "item": "muser"}
      },
      { path: "muserrole",
        children: muserroleRoutingPath, 
        data: {"mraLevel": 1, "item": "muserrole"}
      },
    ]
  }
];

export const roles_server_root_uri:string = "/api/roles";
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sat Feb 16 2019 17:02:40 GMT-0800 (PST)

import { Routes } from '@angular/router';

import { RolesComponent } from './roles/roles.component';

//Import routing paths
import {mroleRoutingPath, mmoduleRoutingPath, mpermissionRoutingPath, muserRoutingPath, muserroleRoutingPath,  } from './roles/roles-routing.path';

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
      { path: "muser",
        children: muserRoutingPath, 
        data: {"mraLevel": 1, "item": "muser"}
      },
      { path: "muserrole",
        children: muserroleRoutingPath, 
        data: {"mraLevel": 1, "item": "muserrole"}
      },
    ]
  }
];

export const roles_server_root_uri:string = "/api/roles";**** End of recent updates.<<<*/
