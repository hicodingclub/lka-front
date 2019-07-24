import { Routes } from '@angular/router';

import { AcademicsComponent } from './academics/academics.component';

//Import routing paths
import { studentRoutingPath, teacherRoutingPath, courseRoutingPath, classRoutingPath, studentclassRoutingPath, classenrollRoutingPath,  } from './academics/academics-routing.path';

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
      { path: "classenroll",
        children: classenrollRoutingPath,
        data: {"mraLevel": 1, "item": "classenroll"}
      },
    ]
  }
];

export const academics_server_root_uri:string = "/api/academics";
/*>>> Please check this recent updates and merge with existing ones***
**Date: Tue Jul 23 2019 10:35:27 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { AcademicsComponent } from './academics/academics.component';

//Import routing paths
import { classenrollRoutingPath, classRoutingPath, studentclassRoutingPath, courseRoutingPath, studentRoutingPath, teacherRoutingPath,  } from './academics/academics-routing.path';

export const AcademicsRoutes: Routes = [
  { path: 'academics',
    component: AcademicsComponent,
    children: [
      {path: '',  redirectTo: 'classenroll', pathMatch: 'full'},

      { path: "classenroll",
        children: classenrollRoutingPath,
        data: {"mraLevel": 1, "item": "classenroll"}
      },
      { path: "class",
        children: classRoutingPath,
        data: {"mraLevel": 1, "item": "class"}
      },
      { path: "studentclass",
        children: studentclassRoutingPath,
        data: {"mraLevel": 1, "item": "studentclass"}
      },
      { path: "course",
        children: courseRoutingPath,
        data: {"mraLevel": 1, "item": "course"}
      },
      { path: "student",
        children: studentRoutingPath,
        data: {"mraLevel": 1, "item": "student"}
      },
      { path: "teacher",
        children: teacherRoutingPath,
        data: {"mraLevel": 1, "item": "teacher"}
      },
    ]
  }
];

export const academics_server_root_uri:string = "/api/academics";**** End of recent updates.<<<*/
