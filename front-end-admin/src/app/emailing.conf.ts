import { Routes } from '@angular/router';

import { EmailingComponent } from './emailing/emailing.component';

//Import routing paths
import { emailtemplateRoutingPath, emaillogRoutingPath,  } from './emailing/emailing-routing.path';

export const EmailingRoutes: Routes = [
  { path: 'emailing',
    component: EmailingComponent,
    children: [
      {path: '',  redirectTo: 'emailtemplate', pathMatch: 'full'},

      { path: "emailtemplate",
        children: emailtemplateRoutingPath,
        data: {"mraLevel": 1, "item": "emailtemplate"}
      },
      { path: "emaillog",
        children: emaillogRoutingPath,
        data: {"mraLevel": 1, "item": "emaillog"}
      },
    ]
  }
];

export const emailing_server_root_uri:string = "/api/emailing";/*>>> Please check this recent updates and merge with existing ones***
**Date: Mon Nov 11 2019 18:06:31 GMT-0800 (Pacific Standard Time)

import { Routes } from '@angular/router';

import { EmailingComponent } from './emailing/emailing.component';

//Import routing paths
import { emailtemplateRoutingPath, emaillogRoutingPath,  } from './emailing/emailing-routing.path';

export const EmailingRoutes: Routes = [
  { path: 'emailing',
    component: EmailingComponent,
    children: [
      {path: '',  redirectTo: 'emailtemplate', pathMatch: 'full'},

      { path: "emailtemplate",
        children: emailtemplateRoutingPath,
        data: {"mraLevel": 1, "item": "emailtemplate"}
      },
      { path: "emaillog",
        children: emaillogRoutingPath,
        data: {"mraLevel": 1, "item": "emaillog"}
      },
    ]
  }
];

export const emailing_server_root_uri:string = "/api/emailing";**** End of recent updates.<<<*/
