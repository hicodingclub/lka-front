import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { PaymentComponent, ViewType } from '../payment.component';
import { PaymentService } from '../payment.service';



  
@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent extends PaymentComponent implements OnInit {

  public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(
      
      public paymentService: PaymentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                paymentService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('product');
          this.stringFields.push('productID');
          this.stringFields.push('price');
          this.stringFields.push('status');


          this.dateFields = ['createdAt', ];







          this.listViewFilter = 'list';
          this.setListSort('createdAt', 'Created At', 'desc');

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};
  }

  ngOnInit() {
      this.adjustListViewForWindowSize();

      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.searchList();
  }

  static getInstance() {
    //used by others to call some common functions
    return new PaymentListComponent(null, null, null, null, null);
  }
}

