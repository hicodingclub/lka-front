import { StudentEditComponent } from '../academics/student/student-edit/student-edit.component';

import { AuthGuard } from 'mdds-angular-auth';

export const loginPipelinePath = [
    {path: 'student', component: StudentEditComponent, canActivate: [AuthGuard]},
];
