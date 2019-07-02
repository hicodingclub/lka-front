import { Routes } from '@angular/router';

import { AcademicsComponent } from './academics/academics.component';

//Import routing paths
import {studentRoutingPath, teacherRoutingPath, courseRoutingPath, classRoutingPath,  } from './academics/academics-routing.path';

export const AcademicsRoutes: Routes = [
  { path: 'academics', 
    component: AcademicsComponent,
    children: [ 
      {path: '',  redirectTo: 'student', pathMatch: 'full'},

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
    ]
  }
];

export const academics_server_root_uri:string = "/api/academics";

/*>>> Please check this recent updates and merge with existing ones***
**Date: Tue Jul 02 2019 10:05:31 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { AcademicsComponent } from './academics/academics.component';

//Import routing paths
import { studentRoutingPath, teacherRoutingPath, courseRoutingPath, classRoutingPath, studentclassRoutingPath,  } from './academics/academics-routing.path';

export const AcademicsRoutes: Routes = [
  { path: 'academics', 
    component: AcademicsComponent,
    children: [ 
      {path: '',  redirectTo: 'student', pathMatch: 'full'},

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

export const academics_server_root_uri:string = "/api/academics";**** End of recent updates.<<<*/
