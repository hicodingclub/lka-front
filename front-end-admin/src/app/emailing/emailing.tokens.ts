import { InjectionToken } from '@angular/core';

import { emailing_server_root_uri } from '../emailing-cust/emailing.tokens.value';

export const Emailing_SERVER_ROOT_URI = new InjectionToken<string>(
    'Emailing_SERVER_ROOT_URI',
    {
        factory: (): string => emailing_server_root_uri,
        providedIn: 'root',
    },
);