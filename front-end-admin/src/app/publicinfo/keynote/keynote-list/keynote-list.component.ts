import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { KeynoteComponent, ViewType } from '../keynote.component';
import { KeynoteService } from '../keynote.service';



@Component({
  selector: 'app-keynote-list',
  templateUrl: './keynote-list.component.html',
  styleUrls: ['./keynote-list.component.css']
})
export class KeynoteListComponent extends KeynoteComponent implements OnInit {


  constructor(

      protected keynoteService: KeynoteService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                keynoteService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('signaturePicture');
          this.stringFields.push('title');
          this.stringFields.push('subtitle');
          this.stringFields.push('description');
          this.stringFields.push('tag');







          this.listViewFilter = 'list';
          this.setListSort('title', 'Title', 'asc');
          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
