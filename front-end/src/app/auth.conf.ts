import { DropdownItem } from '@hicoder/angular-auth';
export const authentication_page_root_uri: string = '/auth';
export const authentication_server_root_uri: string = '/api/auth';
export const authentication_interfaces = 'users';
export const authentication_login_pipeline = undefined;

export const authentication_dropdown_items: DropdownItem[] = [
    {displayName: 'Student Profiles', routerLink: '/academics/student'},
    {displayName: 'Class Enrollments', routerLink: '/academics/classenroll'},
    {displayName: 'Online Payments', routerLink: '/academics/payment'},
] 
