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


  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(

      public keynoteService: KeynoteService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                keynoteService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('signaturePicture');
          this.stringFields.push('title');
          this.stringFields.push('subtitle');
          this.stringFields.push('description');
          this.stringFields.push('tag');







          this.listViewFilter = 'list';
          this.setListSort('title', 'Title', 'asc');
  }

  ngOnInit() {
      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.populateList();
  }
}
