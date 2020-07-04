import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { GeneralinfoDetailCustComponent } from '../../../publicinfo-cust/base/generalinfo/generalinfo-detail.cust.component';
import { ViewType } from '../generalinfo.component';
import { GeneralinfoService } from '../generalinfo.service';




@Component({
  selector: 'app-generalinfo-detail',
  templateUrl: './generalinfo-detail.component.html',
  styleUrls: ['./generalinfo-detail.component.css']
})
export class GeneralinfoDetailComponent extends GeneralinfoDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public generalinfoService: GeneralinfoService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                generalinfoService, injector, router, route, location);
          this.view = ViewType.DETAIL;

          this.fieldDisplayNames = {
            'signaturePicture': 'Signature Picture',
            'title': 'Title',
            'description': 'Description',
          };
          this.stringFields.push('signaturePicture');
          this.stringFields.push('title');
          this.stringFields.push('description');
          this.textareaFields = [
            'description',
          ];
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
