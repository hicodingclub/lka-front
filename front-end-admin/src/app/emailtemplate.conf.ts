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
**Date: Sat Oct 12 2019 22:15:18 GMT-0700 (Pacific Daylight Time)

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
