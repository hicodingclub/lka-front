import { Routes } from '@angular/router';

import { AcademicsComponent } from './academics/academics.component';

//Import routing paths
import { studentRoutingPath, teacherRoutingPath, courseRoutingPath, classRoutingPath, studentclassRoutingPath, classenrollRoutingPath, termsRoutingPath,  } from './academics/academics-routing.path';

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
      { path: "terms",
        children: termsRoutingPath,
        data: {"mraLevel": 1, "item": "terms"}
      },
    ]
  }
];

export const academics_server_root_uri:string = "/api/academics";/*>>> Please check this recent updates and merge with existing ones***
**Date: Sun Dec 01 2019 16:26:26 GMT-0800 (Pacific Standard Time)

import { Routes } from '@angular/router';

import { AcademicsComponent } from './academics/academics.component';

//Import routing paths
import { studentRoutingPath, teacherRoutingPath, courseRoutingPath, classRoutingPath, studentclassRoutingPath, classenrollRoutingPath, termsRoutingPath,  } from './academics/academics-routing.path';

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
      { path: "terms",
        children: termsRoutingPath,
        data: {"mraLevel": 1, "item": "terms"}
      },
    ]
  }
];

export const academics_server_root_uri:string = "/api/academics";
**** End of recent updates.<<<*/
