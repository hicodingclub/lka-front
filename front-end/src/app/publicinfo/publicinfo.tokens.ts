import { InjectionToken } from '@angular/core';

import { publicinfo_server_root_uri } from '../publicinfo-cust/publicinfo.tokens.value';

export const Publicinfo_SERVER_ROOT_URI = new InjectionToken<string>(
    'Publicinfo_SERVER_ROOT_URI',
    {
        factory: (): string => publicinfo_server_root_uri,
        providedIn: 'root',
    },
);