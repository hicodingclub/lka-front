import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { PaymentComponent, ViewType } from '../payment.component';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-detail-field',
  templateUrl: './payment-detail-field.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailFieldComponent extends PaymentComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public paymentService: PaymentService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                paymentService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'product': 'Product',
            'productID': 'Product ID',
            'orderDescription': 'Description',
            'price': 'Price',
            'createdAt': 'Created At',
            'transLogP': 'Transaction Log',
            'status': 'Status',
          };
          this.stringFields.push('product');
          this.stringFields.push('productID');
          this.stringFields.push('orderDescription');
          this.stringFields.push('price');
          this.stringFields.push('transLogP');
          this.stringFields.push('status');
          this.dateFields = ['createdAt', ];
    }

    ngOnInit() {
      if (!this.showFieldsStr) {
        console.error("A field has to be given to show it.");
        return;
      }
      this.showFields = this.showFieldsStr.match(/\S+/g);
      if (this.detailObj) {
        this.onDetailReturned(this.detailObj, null);
      } else {
        if (!this.id) this.id = this.id;
        if (this.id) this.populateDetail(this.id);
        else {
          console.error("No id provided to show info");
          return;
        }
      }
    }
}
