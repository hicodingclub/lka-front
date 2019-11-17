import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EmaillogComponent, ViewType } from '../emaillog.component';
import { EmaillogService } from '../emaillog.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MraRichTextShowDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-emaillog-detail',
  templateUrl: './emaillog-detail.component.html',
  styleUrls: ['./emaillog-detail.component.css']
})
export class EmaillogDetailComponent extends EmaillogComponent implements OnInit, AfterViewInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;
  @Input()
  public style: any; // {}
  @Input()
  public options: any; // {} uiOptions


  @ViewChildren(MraRichTextShowDirective) textEditors: QueryList<MraRichTextShowDirective>;

  constructor(
      
      public emaillogService: EmaillogService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                emaillogService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('from');
          this.stringFields.push('to');
          this.stringFields.push('subject');
          this.stringFields.push('content');
          this.stringFields.push('template');
          this.stringFields.push('module');
          this.stringFields.push('reason');
          this.stringFields.push('result');
          this.stringFields.push('userId');


          this.dateFields = ['createdAt', ];






  }

  ngOnInit() {
      this.style = this.style || {};
      this.options = this.options || {};
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
