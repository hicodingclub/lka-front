import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { PaymentService } from './payment.service';

const itemCamelName = 'payment';

export { ViewType };




export class PaymentComponent extends MddsBaseComponent {



    constructor(
      
      public paymentService: PaymentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(paymentService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['product', 'Product']);this.briefFieldsInfo.push(['productID', 'Product ID']);this.briefFieldsInfo.push(['price', 'Price']);this.briefFieldsInfo.push(['createdAt', 'Created At']);this.briefFieldsInfo.push(['status', 'Status']);



        this.requiredFields = ['product','productID','orderDescription','price','transLogP','transLogA','status',];


        this.schemaName = 'payment';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'academics';
        this.indexFields = ['product', ];
    }
}
