import { EnrollComponent } from './enroll.component';
import { Routes } from '@angular/router'

import { AuthGuard } from 'mdds-angular-auth';

export const actionPath: Routes = [
    {path: 'enroll', component: EnrollComponent, canActivate: [AuthGuard]},
];

export { EnrollComponent } from './enroll.component';