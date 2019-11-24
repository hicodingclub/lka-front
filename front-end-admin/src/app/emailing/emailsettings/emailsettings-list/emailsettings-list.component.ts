import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { EmailsettingsComponent, ViewType } from '../emailsettings.component';
import { EmailsettingsService } from '../emailsettings.service';



  
@Component({
  selector: 'app-emailsettings-list',
  templateUrl: './emailsettings-list.component.html',
  styleUrls: ['./emailsettings-list.component.css']
})
export class EmailsettingsListComponent extends EmailsettingsComponent implements OnInit {


  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(

      public emailsettingsService: EmailsettingsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                emailsettingsService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('settingName');
          this.stringFields.push('defaultSender');









          this.listViewFilter = 'list';

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};
  }

  ngOnInit() {
      this.adjustListViewForWindowSize();

      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.populateList();
  }

  static getInstance() {
    //used by others to call some common functions
    return new EmailsettingsListComponent(null, null, null, null, null);
  }
}

