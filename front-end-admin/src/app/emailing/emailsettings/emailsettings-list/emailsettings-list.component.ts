import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { EmailsettingsListCustComponent } from '../../../emailing-cust/base/emailsettings/emailsettings-list.cust.component';
import { ViewType } from '../emailsettings.component';
import { EmailsettingsService } from '../emailsettings.service';



  
@Component({
  selector: 'app-emailsettings-list',
  templateUrl: './emailsettings-list.component.html',
  styleUrls: ['./emailsettings-list.component.css']
})
export class EmailsettingsListComponent extends EmailsettingsListCustComponent implements OnInit {


  // @Input() options: any; {disableCatetory: false, disablePagination: false, disbleActionButtons: false
  //                        disableListSearch: false, disableTitle: false, disableRefs: false
  //                        disableListHead: false, disableTitleRow: false}
  // @Input()
  // public inputData:any;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
  // @Input()
  // public categoryBy:string; //field name whose value is used as category
  

  constructor(
      
      public emailsettingsService: EmailsettingsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                emailsettingsService, injector, router, route, location, ViewType.LIST);

          this.fieldDisplayNames = {
            'settingName': 'Setting Name',
            'defaultSender': 'Default Sender Email Address',
          };
          this.stringFields.push('settingName');
          this.stringFields.push('defaultSender');

          this.listViewFilter = 'list';

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};

          this.clickItemAction = 'detail';
          this.itemMultiSelect = true;
  }

  ngOnInit() {
      super.ngOnInit();

      this.adjustListViewForWindowSize();

      this.clickItemAction = typeof this.options.clickItemAction === 'undefined'? this.clickItemAction : this.options.clickItemAction;
      this.itemMultiSelect = typeof this.options.itemMultiSelect === 'boolean' ?  this.options.itemMultiSelect : this.itemMultiSelect;
  
      if (!this.options) {
        this.options = {};
      }
  
      if (this.options.disableCatetory) {
        this.listCategory1 = {}; // no do query based on category for home view;
        this.listCategory2 = {}; // no do query based on category for home view;
      }

      // this is to initialize the detail that will be used for search condition selection
      let detail = {};
      if (this.searchObj) {
        this.searchDetailReady = true; // search provided from "detail", not from search bar.
        detail = this.searchObj;
      }
      if (this.queryParams) {
        this.listSortField = this.queryParams.listSortField;
        this.listSortOrder = this.queryParams.listSortOrder;
        if (this.queryParams.perPage) {
          this.perPage = this.queryParams.perPage 
        }
      }
      this.detail = this.formatDetail(detail);
      this.searchList();

      // get editHintFields
      this.searchHintFieldValues();
  }

  static getInstance() {
    //used by others to call some common functions
    return new EmailsettingsListComponent(null, null, null, null, null);
  }
}

