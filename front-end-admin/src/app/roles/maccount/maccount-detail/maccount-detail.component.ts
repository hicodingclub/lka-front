import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MaccountDetailCustComponent } from '../../../roles-cust/base/maccount/maccount-detail.cust.component';
import { ViewType } from '../maccount.component';
import { MaccountService } from '../maccount.service';




@Component({
  selector: 'app-maccount-detail',
  templateUrl: './maccount-detail.component.html',
  styleUrls: ['./maccount-detail.component.css']
})
export class MaccountDetailComponent extends MaccountDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public maccountService: MaccountService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                maccountService, injector, router, route, location);
          this.view = ViewType.DETAIL;

          this.fieldDisplayNames = {
            'username': 'Username',
            'email': 'Email',
            'phone': 'Phone',
            'firstname': 'Firstname',
            'lastname': 'Lastname',
            'since': 'Since',
            'status': 'Status',
          };
          this.enums['status'] = [
            'Enabled',
            'Disabled',
            'Pending',
          ];
          this.stringFields.push('username');
          this.stringFields.push('email');
          this.stringFields.push('phone');
          this.stringFields.push('firstname');
          this.stringFields.push('lastname');
          this.stringFields.push('status');
          this.dateFields = [
            'since',
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

    //Load first reference, if not others activated
    if (!this.options['disableRefLink'] && !this.isChildRouterActivated()) {
      this.router.navigate(['./maccountrole/list', {}], {relativeTo: this.route, queryParamsHandling: 'preserve',});
    }
  }
}
