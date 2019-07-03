import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { KeynoteListComponent } from './keynote-list.component';
import { KeynoteService } from '../keynote.service';

@Component({
  selector: 'app-keynote-list-home',
  templateUrl: './keynote-list-home.component.html',
  styleUrls: ['./keynote-list.component.css']
})
export class KeynoteListHomeComponent extends KeynoteListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected keynoteService: KeynoteService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super( keynoteService, injector, router, route, location);
        this.per_page = 3;
  }

  ngOnInit() {
    const detail = this.searchObj || {};
    this.detail = this.formatDetail(detail);
    this.searchList();
  }
}
