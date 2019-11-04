import { Routes } from '@angular/router';

import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';

//Import routing paths
import { emailtemplateRoutingPath,  } from './emailtemplate/emailtemplate-routing.path';

export const EmailtemplateRoutes: Routes = [
  { path: 'emailtemplate',
    component: EmailtemplateComponent,
    children: [
      {path: '',  redirectTo: 'emailtemplate', pathMatch: 'full'},

      { path: "emailtemplate",
        children: emailtemplateRoutingPath,
        data: {"mraLevel": 1, "item": "emailtemplate"}
      },
    ]
  }
];

export const emailtemplate_server_root_uri:string = "/api/emailtemplate";/*>>> Please check this recent updates and merge with existing ones***
**Date: Sun Nov 03 2019 21:08:41 GMT-0800 (Pacific Standard Time)

import { Routes } from '@angular/router';

import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';

//Import routing paths
import { emailtemplateRoutingPath,  } from './emailtemplate/emailtemplate-routing.path';

export const EmailtemplateRoutes: Routes = [
  { path: 'emailtemplate',
    component: EmailtemplateComponent,
    children: [
      {path: '',  redirectTo: 'emailtemplate', pathMatch: 'full'},

      { path: "emailtemplate",
        children: emailtemplateRoutingPath,
        data: {"mraLevel": 1, "item": "emailtemplate"}
      },
    ]
  }
];

export const emailtemplate_server_root_uri:string = "/api/emailtemplate";**** End of recent updates.<<<*/
