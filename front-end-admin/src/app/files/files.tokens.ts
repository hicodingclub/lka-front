import {
  InjectionToken
} from '@angular/core';
import {
  files_server_root_uri
} from '../files-cust/files.tokens.value';
export const Files_SERVER_ROOT_URI = new InjectionToken < string > ('Files_SERVER_ROOT_URI', {
  factory: (): string => files_server_root_uri,
  providedIn: 'root',
}, );