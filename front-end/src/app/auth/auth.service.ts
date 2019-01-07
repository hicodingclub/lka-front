import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, filter, retry } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { AUTHTICATION_SERVER_ROOT_URI } from './tokens';
 
@Injectable()
export class AuthenticationService {
 
    private interruptedUrl: string;
     
    constructor(
            @Inject(AUTHTICATION_SERVER_ROOT_URI) private authServerRootUri: string,
            private http: HttpClient) {}
     
    public isAuthorized(): boolean {
        let isAuthorized: boolean = !!localStorage.getItem('accessToken');
     
        return isAuthorized;
    }
     
    public getAccessToken(): string {
        const accessToken: string = localStorage.getItem('accessToken');
     
        return accessToken;
    }
     
    public refreshToken(): Observable<any> {
        let refreshToken: string = localStorage.getItem('refreshToken');
        let userName: string = localStorage.getItem('userName');
     
        return this.http.post<any>(this.authServerRootUri + '/refresh', {refreshToken: refreshToken, userName: userName})
            .pipe(
                map(this.loggedIn),
                catchError(error => {
                    this.logout();
                    return error;
                })
            );
    }
     
    public refreshShouldHappen(response: HttpErrorResponse): boolean {
        return response.status === 401;
    }
     
    public verifyTokenRequest(url: string): boolean {
        if (url.endsWith(this.authServerRootUri + '/refresh') || url.endsWith(this.authServerRootUri + '/login')) return true;
        return false;
    }
     
    public getInterruptedUrl(): string {
        return this.interruptedUrl || "/";
    }
     
    public setInterruptedUrl(url: string): void {
        this.interruptedUrl = url;
    }

    public getUserName(): string {
        return localStorage.getItem('userName');
    }
     

    login(userName: string, password: string) {
        localStorage.setItem('userName', userName);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('displayName');

        return this.http.post<any>(this.authServerRootUri + '/login', { username: userName, password: password })
            .pipe(map(this.loggedIn));
    }

    register(userInfo:any) {
        localStorage.removeItem('userName');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('displayName');
        if (userInfo.userName) localStorage.setItem('username', userInfo.userName);
        if (userInfo.displayName) localStorage.setItem('displayName', userInfo.displayName);

        return this.http.post<any>(this.authServerRootUri + '/register', userInfo);
    }

    loggedIn(user) {
        if (user && user.accessToken) {
            localStorage.setItem('accessToken', user.accessToken);
        }
        if (user && user.refreshToken) {
            localStorage.setItem('refreshToken', user.refreshToken);
        }
        if (user && user.displayName) {
            localStorage.setItem('displayName', user.displayName);
        }
        if (user && user.userName) {
            localStorage.setItem('userName', user.userName);
        }
        return user;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
}
