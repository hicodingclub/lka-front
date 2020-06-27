import { Routes } from '@angular/router';

import { PublicinfoComponent } from '../publicinfo/publicinfo.component';

//Import routing paths
import { 
  generalinfoRoutingCorePath, 
  faqRoutingCorePath, 
  eventRoutingCorePath, 
  keynoteRoutingCorePath, 
  articleRoutingCorePath,  
} from '../publicinfo/publicinfo-routing.core.path';

export const PublicinfoCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
    // path: '',
    // non lazy load config. Include module in app module.
    path: 'publicinfo',

    component: PublicinfoComponent,
    children: [
      {path: '',  redirectTo: 'generalinfo', pathMatch: 'full'},

      { path: 'generalinfo',
        children: generalinfoRoutingCorePath,
        data: {mraLevel: 1, item: 'generalinfo'}
      },
      { path: 'faq',
        children: faqRoutingCorePath,
        data: {mraLevel: 1, item: 'faq'}
      },
      { path: 'event',
        children: eventRoutingCorePath,
        data: {mraLevel: 1, item: 'event'}
      },
      { path: 'keynote',
        children: keynoteRoutingCorePath,
        data: {mraLevel: 1, item: 'keynote'}
      },
      { path: 'article',
        children: articleRoutingCorePath,
        data: {mraLevel: 1, item: 'article'}
      },
    ]
  },
];

import { PublicinfoRoutingCustPath } from './publicinfo-routing.cust.path';

export const PublicinfoRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
    // path: 'cust',
    // non lazy load config. Include module in app module.
    path: 'publicinfo/cust',

    children: PublicinfoRoutingCustPath,
  },
];

export const publicinfo_server_root_uri: string = '/api/publicinfo';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sat Jun 27 2020 12:17:08 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { PublicinfoComponent } from '../publicinfo/publicinfo.component';

//Import routing paths
import { 
  generalinfoRoutingCorePath,
  faqRoutingCorePath,
  eventRoutingCorePath,
  keynoteRoutingCorePath,
  articleRoutingCorePath,
} from '../publicinfo/publicinfo-routing.core.path';

export const PublicinfoCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'publicinfo',

    component: PublicinfoComponent,
    children: [
      {path: '',  redirectTo: 'generalinfo', pathMatch: 'full'},

      { path: 'generalinfo',
        children: generalinfoRoutingCorePath,
        data: {mraLevel: 1, item: 'generalinfo'}
      },
      { path: 'faq',
        children: faqRoutingCorePath,
        data: {mraLevel: 1, item: 'faq'}
      },
      { path: 'event',
        children: eventRoutingCorePath,
        data: {mraLevel: 1, item: 'event'}
      },
      { path: 'keynote',
        children: keynoteRoutingCorePath,
        data: {mraLevel: 1, item: 'keynote'}
      },
      { path: 'article',
        children: articleRoutingCorePath,
        data: {mraLevel: 1, item: 'article'}
      },
    ]
  },
];

import { PublicinfoRoutingCustPath } from './publicinfo-routing.cust.path';

export const PublicinfoRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'publicinfo/cust',

    children: PublicinfoRoutingCustPath,
  },
];**** End of recent updates.<<<*/
