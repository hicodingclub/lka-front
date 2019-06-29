import { DropdownItem } from 'mdds-angular-auth';
export const authentication_login_page_uri: string = '/auth/login';
export const authentication_server_root_uri: string = '/api/auth';
export const authentication_interfaces = 'users';
export const authentication_login_pipeline = undefined;

export const authentication_dropdown_items: DropdownItem[] = [
    {displayName: 'My classes', routerLink: '/academics/class'},
    {displayName: 'Student Profile', routerLink: '/academics/student'},
] 