import { loginPipelinePath } from './login-pipeline';

import { AuthGuard } from 'mdds-angular-auth';

export const pipelinePath = [
    {path: 'login', children: loginPipelinePath, canActivate: [AuthGuard]},
];
