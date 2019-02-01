import { Routes } from '@angular/router';

import { ManageComponent } from './manage/manage.component';

//Import routing paths
import {eventRoutingPath, studentRoutingPath, teacherRoutingPath, courseRoutingPath, classRoutingPath, studentclassRoutingPath,  } from './manage/manage-routing.path';

export const ManageRoutes: Routes = [
  { path: 'manage', 
    component: ManageComponent,
    children: [ 
      {path: '',  redirectTo: 'event', pathMatch: 'full'},

      { path: "event",
        children: eventRoutingPath, 
        data: {"mraLevel": 1, "item": "event"}
      },
      { path: "student",
        children: studentRoutingPath, 
        data: {"mraLevel": 1, "item": "student"}
      },
      { path: "teacher",
        children: teacherRoutingPath, 
        data: {"mraLevel": 1, "item": "teacher"}
      },
      { path: "course",
        children: courseRoutingPath, 
        data: {"mraLevel": 1, "item": "course"}
      },
      { path: "class",
        children: classRoutingPath, 
        data: {"mraLevel": 1, "item": "class"}
      },
      { path: "studentclass",
        children: studentclassRoutingPath, 
        data: {"mraLevel": 1, "item": "studentclass"}
      },
    ]
  }
];

export const manage_server_root_uri:string = "/api/manage";
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Feb 01 2019 12:58:37 GMT-0800 (PST)

import { Routes } from '@angular/router';

import { ManageComponent } from './manage/manage.component';

//Import routing paths
import {eventRoutingPath, studentRoutingPath, teacherRoutingPath, courseRoutingPath, classRoutingPath, studentclassRoutingPath,  } from './manage/manage-routing.path';

export const ManageRoutes: Routes = [
  { path: 'manage', 
    component: ManageComponent,
    children: [ 
      {path: '',  redirectTo: 'event', pathMatch: 'full'},

      { path: "event",
        children: eventRoutingPath, 
        data: {"mraLevel": 1, "item": "event"}
      },
      { path: "student",
        children: studentRoutingPath, 
        data: {"mraLevel": 1, "item": "student"}
      },
      { path: "teacher",
        children: teacherRoutingPath, 
        data: {"mraLevel": 1, "item": "teacher"}
      },
      { path: "course",
        children: courseRoutingPath, 
        data: {"mraLevel": 1, "item": "course"}
      },
      { path: "class",
        children: classRoutingPath, 
        data: {"mraLevel": 1, "item": "class"}
      },
      { path: "studentclass",
        children: studentclassRoutingPath, 
        data: {"mraLevel": 1, "item": "studentclass"}
      },
    ]
  }
];

export const manage_server_root_uri:string = "/api/manage";**** End of recent updates.<<<*/
