import { Routes } from '@angular/router';

import { EmailingComponent } from '../emailing/emailing.component';

//Import routing paths
import { 
  emailtemplateRoutingCorePath, 
  emailsettingsRoutingCorePath, 
  emaillogRoutingCorePath,  
} from '../emailing/emailing-routing.core.path';

export const EmailingCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'emailing',

    component: EmailingComponent,
    children: [
      {path: '',  redirectTo: 'emailtemplate', pathMatch: 'full'},

      { path: 'emailtemplate',
        children: emailtemplateRoutingCorePath,
        data: {mraLevel: 1, item: 'emailtemplate'}
      },
      { path: 'emailsettings',
        children: emailsettingsRoutingCorePath,
        data: {mraLevel: 1, item: 'emailsettings'}
      },
      { path: 'emaillog',
        children: emaillogRoutingCorePath,
        data: {mraLevel: 1, item: 'emaillog'}
      },
    ]
  },
];

import { EmailingRoutingCustPath } from './emailing-routing.cust.path';

export const EmailingRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'emailing/cust',

    children: EmailingRoutingCustPath,
  },
];

export const emailing_server_root_uri: string = '/api/emailing';
