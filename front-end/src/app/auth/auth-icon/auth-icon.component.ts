import { Component, OnInit, Inject  } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../auth.service';

import { AUTHTICATION_LOGIN_PAGE_URI } from '../tokens';

@Component({
    selector: 'app-auth-icon',
    templateUrl: 'auth-icon.component.html',
    styleUrls: ['auth-icon.component.css']
})
export class AuthIconComponent implements OnInit {
  private popup: boolean = false;
  private popupStyle: any = {};
  private userName: string = "Please login";
  private userNameShort: string = "Please login";

  constructor(
    private router: Router, 
    private authService: AuthenticationService,
    @Inject(AUTHTICATION_LOGIN_PAGE_URI) private loginPageUri: string) { }

  ngOnInit() {
    this.isAuthorized();
  }
  
  public toggle(event) {
    if (!this.popup) {
      let right = (window.innerWidth - event.x) - 2;
      let top = event.y + 15;

      this.popupStyle = {
        'right': right.toString() + 'px',
        'top': top.toString() + 'px',
      }
    } 
    this.popup = !this.popup;
  }

  public closePopup() {
    this.popup = false;
  }

  public isAuthorized() {
    let name = this.authService.getUserName();
    if (name) {
        this.userName = name;
        if (name.length > 12) this.userNameShort = name.substring(0, 10) + '...';
        else this.userNameShort = name.substring(0, 13);
    }
    return this.authService.isAuthorized();
  }

  public login() {
    // not logged in so redirect to login page with the return url
    let state: RouterStateSnapshot = this.router.routerState.snapshot;
    this.authService.setInterruptedUrl(state.url);
    this.popup = false;
    this.router.navigate([this.loginPageUri]);
  }

  public logout() {
    // not logged in so redirect to login page with the return url
    this.authService.logout();
    this.popup = false;
  }
}