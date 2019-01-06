import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthenticationService } from './auth.service';
import { AUTHTICATION_LOGIN_PAGE_URI } from './tokens';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router, 
    private authService: AuthenticationService,
    @Inject(AUTHTICATION_LOGIN_PAGE_URI) private loginPageUri: string
    ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthorized()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getAccessToken()}`
        }
      });
    }
	return next.handle(request)
	  .pipe(
          tap((event: HttpEvent<any>) => {
	        if (event instanceof HttpResponse) {
	          ;
	        }
	      }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this.authService.setInterruptedUrl(this.router.url);
                this.router.navigate([this.loginPageUri]);
              }
            }
	      })
	);
  }
}