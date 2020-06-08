import { InjectionToken } from '@angular/core';

import { access_server_root_uri } from '../access-cust/access.tokens.value';

export const Access_SERVER_ROOT_URI = new InjectionToken<string>(
    'Access_SERVER_ROOT_URI',
    {
        factory: (): string => access_server_root_uri,
        providedIn: 'root',
    },
);