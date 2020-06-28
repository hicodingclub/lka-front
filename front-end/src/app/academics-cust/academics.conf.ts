import { Routes } from '@angular/router';

import { AcademicsComponent } from '../academics/academics.component';

//Import routing paths
import { 
  studentRoutingCorePath, 
  teacherRoutingCorePath, 
  courseRoutingCorePath, 
  classRoutingCorePath, 
  studentclassRoutingCorePath, 
  classenrollRoutingCorePath, 
  termsRoutingCorePath, 
  paymentRoutingCorePath,  
} from '../academics/academics-routing.core.path';

export const AcademicsCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'academics', loadChildren: () => import('./academics/academics.module').then(m => m.AcademicsModule) },
    // path: '',
    // non lazy load config. Include module in app module.
    path: 'academics',

    component: AcademicsComponent,
    children: [
      {path: '',  redirectTo: 'student', pathMatch: 'full'},

      { path: 'student',
        children: studentRoutingCorePath,
        data: {mraLevel: 1, item: 'student'}
      },
      { path: 'teacher',
        children: teacherRoutingCorePath,
        data: {mraLevel: 1, item: 'teacher'}
      },
      { path: 'course',
        children: courseRoutingCorePath,
        data: {mraLevel: 1, item: 'course'}
      },
      { path: 'class',
        children: classRoutingCorePath,
        data: {mraLevel: 1, item: 'class'}
      },
      { path: 'studentclass',
        children: studentclassRoutingCorePath,
        data: {mraLevel: 1, item: 'studentclass'}
      },
      { path: 'classenroll',
        children: classenrollRoutingCorePath,
        data: {mraLevel: 1, item: 'classenroll'}
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
    // path: 'cust',
    // non lazy load config. Include module in app module.
    path: 'academics/cust',

    children: AcademicsRoutingCustPath,
  },
];

export const academics_server_root_uri: string = '/api/academics';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sun Jun 28 2020 13:26:58 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { AcademicsComponent } from '../academics/academics.component';

//Import routing paths
import { 
  studentRoutingCorePath,
  teacherRoutingCorePath,
  courseRoutingCorePath,
  classRoutingCorePath,
  studentclassRoutingCorePath,
  classenrollRoutingCorePath,
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
      {path: '',  redirectTo: 'student', pathMatch: 'full'},

      { path: 'student',
        children: studentRoutingCorePath,
        data: {mraLevel: 1, item: 'student'}
      },
      { path: 'teacher',
        children: teacherRoutingCorePath,
        data: {mraLevel: 1, item: 'teacher'}
      },
      { path: 'course',
        children: courseRoutingCorePath,
        data: {mraLevel: 1, item: 'course'}
      },
      { path: 'class',
        children: classRoutingCorePath,
        data: {mraLevel: 1, item: 'class'}
      },
      { path: 'studentclass',
        children: studentclassRoutingCorePath,
        data: {mraLevel: 1, item: 'studentclass'}
      },
      { path: 'classenroll',
        children: classenrollRoutingCorePath,
        data: {mraLevel: 1, item: 'classenroll'}
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
