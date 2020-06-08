import { InjectionToken } from '@angular/core';

import { pipeline_server_root_uri } from '../pipeline-cust/pipeline.tokens.value';

export const Pipeline_SERVER_ROOT_URI = new InjectionToken<string>(
    'Pipeline_SERVER_ROOT_URI',
    {
        factory: (): string => pipeline_server_root_uri,
        providedIn: 'root',
    },
);