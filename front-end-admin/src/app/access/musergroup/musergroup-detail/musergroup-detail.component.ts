import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MusergroupDetailCustComponent } from '../../../access-cust/base/musergroup/musergroup-detail.cust.component';
import { ViewType } from '../musergroup.component';
import { MusergroupService } from '../musergroup.service';




@Component({
  selector: 'app-musergroup-detail',
  templateUrl: './musergroup-detail.component.html',
  styleUrls: ['./musergroup-detail.component.css']
})
export class MusergroupDetailComponent extends MusergroupDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public musergroupService: MusergroupService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                musergroupService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'group': 'Group',
            'description': 'Description',
          };


          this.stringFields.push('group');
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

    //Load first reference, if not others activated
    if (!this.options['disableRefLink'] && !this.isChildRouterActivated()) {
      this.router.navigate(['./mpubaccess/list', {}], {relativeTo: this.route, queryParamsHandling: 'preserve',});
    }
  }
}
