import {
  InjectionToken
} from '@angular/core';
import {
  academics_server_root_uri
} from '../academics-cust/academics.tokens.value';
export const Academics_SERVER_ROOT_URI = new InjectionToken < string > ('Academics_SERVER_ROOT_URI', {
  factory: (): string => academics_server_root_uri,
  providedIn: 'root',
}, );