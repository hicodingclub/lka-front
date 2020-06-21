import { Routes } from '@angular/router';

import { AcademicsComponent } from '../academics/academics.component';

//Import routing paths
import { 
  classenrollRoutingCorePath, 
  classRoutingCorePath, 
  studentclassRoutingCorePath, 
  courseRoutingCorePath, 
  studentRoutingCorePath, 
  teacherRoutingCorePath, 
  termsRoutingCorePath, 
  paymentRoutingCorePath,  
} from '../academics/academics-routing.core.path';

export const AcademicsCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'academics', loadChildren: () => import('./academics/academics.module').then(m => m.AcademicsModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'academics',

    component: AcademicsComponent,
    children: [
      {path: '',  redirectTo: 'classenroll', pathMatch: 'full'},

      { path: 'classenroll',
        children: classenrollRoutingCorePath,
        data: {mraLevel: 1, item: 'classenroll'}
      },
      { path: 'class',
        children: classRoutingCorePath,
        data: {mraLevel: 1, item: 'class'}
      },
      { path: 'studentclass',
        children: studentclassRoutingCorePath,
        data: {mraLevel: 1, item: 'studentclass'}
      },
      { path: 'course',
        children: courseRoutingCorePath,
        data: {mraLevel: 1, item: 'course'}
      },
      { path: 'student',
        children: studentRoutingCorePath,
        data: {mraLevel: 1, item: 'student'}
      },
      { path: 'teacher',
        children: teacherRoutingCorePath,
        data: {mraLevel: 1, item: 'teacher'}
      },
      { path: 'terms',
        children: termsRoutingCorePath,
        data: {mraLevel: 1, item: 'terms'}
      },
      { path: 'payment',
        children: paymentRoutingCorePath,
        data: {mraLevel: 1, item: 'payment'}
      },
    ]
  },
];

import { AcademicsRoutingCustPath } from './academics-routing.cust.path';

export const AcademicsRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'academics', loadChildren: () => import('./academics/academics.module').then(m => m.AcademicsModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'academics/cust',

    children: AcademicsRoutingCustPath,
  },
];

export const academics_server_root_uri: string = '/api/academics';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sat Jun 20 2020 16:51:11 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { AcademicsComponent } from '../academics/academics.component';

//Import routing paths
import { 
  classenrollRoutingCorePath,
  classRoutingCorePath,
  studentclassRoutingCorePath,
  courseRoutingCorePath,
  studentRoutingCorePath,
  teacherRoutingCorePath,
  termsRoutingCorePath,
  paymentRoutingCorePath,
} from '../academics/academics-routing.core.path';

export const AcademicsCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'academics', loadChildren: () => import('./academics/academics.module').then(m => m.AcademicsModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'academics',

    component: AcademicsComponent,
    children: [
      {path: '',  redirectTo: 'classenroll', pathMatch: 'full'},

      { path: 'classenroll',
        children: classenrollRoutingCorePath,
        data: {mraLevel: 1, item: 'classenroll'}
      },
      { path: 'class',
        children: classRoutingCorePath,
        data: {mraLevel: 1, item: 'class'}
      },
      { path: 'studentclass',
        children: studentclassRoutingCorePath,
        data: {mraLevel: 1, item: 'studentclass'}
      },
      { path: 'course',
        children: courseRoutingCorePath,
        data: {mraLevel: 1, item: 'course'}
      },
      { path: 'student',
        children: studentRoutingCorePath,
        data: {mraLevel: 1, item: 'student'}
      },
      { path: 'teacher',
        children: teacherRoutingCorePath,
        data: {mraLevel: 1, item: 'teacher'}
      },
      { path: 'terms',
        children: termsRoutingCorePath,
        data: {mraLevel: 1, item: 'terms'}
      },
      { path: 'payment',
        children: paymentRoutingCorePath,
        data: {mraLevel: 1, item: 'payment'}
      },
    ]
  },
];

import { AcademicsRoutingCustPath } from './academics-routing.cust.path';

export const AcademicsRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'academics', loadChildren: () => import('./academics/academics.module').then(m => m.AcademicsModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'academics/cust',

    children: AcademicsRoutingCustPath,
  },
];**** End of recent updates.<<<*/
