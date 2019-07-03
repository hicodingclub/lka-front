import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { GeneralinfoListComponent } from './generalinfo-list.component';
import { GeneralinfoService } from '../generalinfo.service';

@Component({
  selector: 'app-generalinfo-list-home',
  templateUrl: './generalinfo-list-home.component.html',
  styleUrls: ['./generalinfo-list.component.css']
})
export class GeneralinfoListHomeComponent extends GeneralinfoListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected generalinfoService: GeneralinfoService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super( generalinfoService, injector, router, route, location);
        this.per_page = 3;
  }

  ngOnInit() {
    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}
