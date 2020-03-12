import { EnrollComponent } from './enroll.component';
import { PayComponent } from './pay.component';

import { Routes } from '@angular/router'

import { AuthGuard } from '@hicoder/angular-auth';

export const actionPath: Routes = [
    {path: 'enroll', component: EnrollComponent, canActivate: [AuthGuard]},
    {path: 'pay', component: PayComponent, canActivate: [AuthGuard]},
];

export { EnrollComponent } from './enroll.component';
export { PayComponent } from './pay.component';

