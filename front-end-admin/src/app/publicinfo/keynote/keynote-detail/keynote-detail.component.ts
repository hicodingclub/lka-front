import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { KeynoteDetailCustComponent } from '../../../publicinfo-cust/base/keynote/keynote-detail.cust.component';
import { ViewType } from '../keynote.component';
import { KeynoteService } from '../keynote.service';




@Component({
  selector: 'app-keynote-detail',
  templateUrl: './keynote-detail.component.html',
  styleUrls: ['./keynote-detail.component.css']
})
export class KeynoteDetailComponent extends KeynoteDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public keynoteService: KeynoteService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                keynoteService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'signaturePicture': 'Signature Picture',
            'title': 'Title',
            'subtitle': 'Subtitle',
            'description': 'Description',
          };
          this.stringFields.push('signaturePicture');
          this.stringFields.push('title');
          this.stringFields.push('subtitle');
          this.stringFields.push('description');
  }

  ngOnInit() {
      super.ngOnInit();
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

  }
}
