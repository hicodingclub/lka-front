import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public currentUrl: string = '';

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects) {
          this.currentUrl = event.urlAfterRedirects;
        } else {
          this.currentUrl = event.url;
        }

        if ((<any>window).gtag) {
          (<any>window).gtag('config', 'UA-145853353-2', {'page_path': this.currentUrl});
        }
      }
    });
  }
}
