import {
  InjectionToken
} from '@angular/core';
import {
  roles_server_root_uri
} from '../roles-cust/roles.tokens.value';
export const Roles_SERVER_ROOT_URI = new InjectionToken < string > ('Roles_SERVER_ROOT_URI', {
  factory: (): string => roles_server_root_uri,
  providedIn: 'root',
}, );