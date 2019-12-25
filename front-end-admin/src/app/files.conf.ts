import { Routes } from '@angular/router';

import { FilesComponent } from './files/files.component';

//Import routing paths
import { mfileRoutingPath, mfilegroupRoutingPath,  } from './files/files-routing.path';

export const FilesRoutes: Routes = [
  { path: 'files',
    component: FilesComponent,
    children: [
      {path: '',  redirectTo: 'mfile', pathMatch: 'full'},

      { path: "mfile",
        children: mfileRoutingPath,
        data: {"mraLevel": 1, "item": "mfile"}
      },
      { path: "mfilegroup",
        children: mfilegroupRoutingPath,
        data: {"mraLevel": 1, "item": "mfilegroup"}
      },
    ]
  }
];

export const files_server_root_uri:string = "/api/files";
/*>>> Please check this recent updates and merge with existing ones***
**Date: Tue Dec 24 2019 21:28:53 GMT-0800 (Pacific Standard Time)

import { Routes } from '@angular/router';

import { FilesComponent } from './files/files.component';

//Import routing paths
import { mfileRoutingPath, mfilegroupRoutingPath,  } from './files/files-routing.path';

export const FilesRoutes: Routes = [
  { path: 'files',
    component: FilesComponent,
    children: [
      {path: '',  redirectTo: 'mfile', pathMatch: 'full'},

      { path: "mfile",
        children: mfileRoutingPath,
        data: {"mraLevel": 1, "item": "mfile"}
      },
      { path: "mfilegroup",
        children: mfilegroupRoutingPath,
        data: {"mraLevel": 1, "item": "mfilegroup"}
      },
    ]
  }
];

export const files_server_root_uri:string = "/api/files";
**** End of recent updates.<<<*/
