import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
import {
  PaymentDetailCustComponent
} from '../../../academics-cust/base/payment/payment-detail.cust.component';
import {
  ViewType
} from '../payment.component';
import {
  PaymentService
} from '../payment.service';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent extends PaymentDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public paymentService: PaymentService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(paymentService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'product': 'Product',
      'productID': 'Product ID',
      'orderDescription': 'Description',
      'price': 'Price',
      'createdAt': 'Created At',
      'transLogP': 'Transaction Log',
      'transLogA': 'Transaction Log - Admin',
      'status': 'Status',
    };
    this.stringFields.push('product');
    this.stringFields.push('productID');
    this.stringFields.push('orderDescription');
    this.stringFields.push('price');
    this.stringFields.push('transLogP');
    this.stringFields.push('transLogA');
    this.stringFields.push('status');
    this.dateFields = ['createdAt', ];
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
  ngAfterViewInit() {}
}