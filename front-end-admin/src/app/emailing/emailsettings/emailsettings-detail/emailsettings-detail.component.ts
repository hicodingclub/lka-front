import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EmailsettingsDetailCustComponent } from '../../../emailing-cust/base/emailsettings/emailsettings-detail.cust.component';
import { ViewType } from '../emailsettings.component';
import { EmailsettingsService } from '../emailsettings.service';




@Component({
  selector: 'app-emailsettings-detail',
  templateUrl: './emailsettings-detail.component.html',
  styleUrls: ['./emailsettings-detail.component.css']
})
export class EmailsettingsDetailComponent extends EmailsettingsDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public emailsettingsService: EmailsettingsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                emailsettingsService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'settingName': 'Setting Name',
            'defaultSender': 'Default Sender Email Address',
          };


          this.stringFields.push('settingName');
          this.stringFields.push('defaultSender');










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
