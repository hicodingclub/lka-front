import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MddsServiceError, ErrorToastConfig, ErrorToast, SnackBarConfig, SnackBar } from '@hicoder/angular-core';

import { ClassenrollService } from '../academics/classenroll/classenroll.service';
import { ClassService } from '../academics/class/class.service';
import { PaymentService } from '../academics/payment/payment.service';

declare var paypal: any;
const ONLINE_TRANS_RATE: number = 1.029;
const PAYPAL_QR_RATE: number = 1.019;
const NEW_ENROLLMENT_FEE: number = 50;
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  public enrollmentID: string;
  public classDetail: any;
  public enrollmentDetail: any;
  public numberStu: number = 1;
  public totalPrice: number = 0;
  public onlinePrice: number = 0;
  public paypalQRPrice: number = 0;
  public firstEnroll: boolean = true;
  public showPayment: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private classenrollServic: ClassenrollService,
    private classService: ClassService,
    private paymentService: PaymentService) {
  }

  async ngOnInit() {
    /* this code snippet always return {} ???
    this.route.params.subscribe(params => {
      console.log('ngOnInit params', params);
    });
    */

    const enrollmentID = this.route.snapshot.queryParamMap.get('classenroll');
    this.enrollmentID = enrollmentID;

    try {
        this.enrollmentDetail = await this.classenrollServic.getDetail(enrollmentID).toPromise();
        this.classDetail = await this.classService.getDetail(this.enrollmentDetail.class._id).toPromise();

        this.classDetail.startTime = this.classDetail.startTime.slice(0, 10);
        this.classDetail.endTime = this.classDetail.endTime.slice(0, 10);

        this.numberStu = this.enrollmentDetail.student.length;
        const priceStr = this.classDetail.price.replace('$', '').trim();
        const price = parseFloat(priceStr);
        if (price) {
            this.totalPrice = price * this.numberStu;
            this.onlinePrice = this.totalPrice * ONLINE_TRANS_RATE;
            this.paypalQRPrice = this.totalPrice * PAYPAL_QR_RATE;
        }
    } catch (err) {
        console.error(err);
        this.onServiceError(err)
    }
  }

  public onServiceError(error: MddsServiceError): void {
    let errMsg: string;
    let more: string;
    if (error.clientErrorMsg) {
        errMsg = error.clientErrorMsg;
    } else if (error.serverError) {
        if (error.status === 401) {  return; } // Don't show unauthorized error
        if (typeof error.serverError === 'object') {
            errMsg = error.status + ': ' + JSON.stringify(error.serverError);
        } else {
            errMsg = error.status + ': ' + error.serverError;
        }
    }
    if (!errMsg) { errMsg = 'Unknown error.'; }
    if (errMsg.length > 80) {
        more = errMsg;
        errMsg = errMsg.substring(0, 80) + '...';
    }
    const errorToastConfig: ErrorToastConfig = {
        content: errMsg,
        more
    };
    const errorToast = new ErrorToast(errorToastConfig);
    errorToast.show();
  }

  public paypalButton(price: number) {
    let translogP: any = {};
    let translogA: any = {};
    paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal',
            
        },
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: price.toFixed(2)
                    }
                }]
            });
        },
        onApprove: (data, actions) => {
            translogP.orderID = data.orderID;
            translogA = data;

            return actions.order.capture().then((details) => {
                translogP.create_time = details.create_time;
                translogP.status = details.status;
                translogA = details;

                const cfg: SnackBarConfig = {
                    content: `You payment is done with status: ${details.status}`
                }

                const snackBar = new SnackBar(cfg);
                snackBar.show();
                this.SubmitPaymentLog(translogP, translogA);
                this.router.navigateByUrl('/academics/classenroll/list');
            });
        }
    }).render('#paypal-button-container');
  }

  private SubmitPaymentLog(logp: any, loga: any) {
    const students = [];
    for (let s of this.enrollmentDetail.student) {
        students.push(s.first_name + ' ' + s.last_name);
    }
    const classTitle = `${this.classDetail.title} (from ${this.classDetail.startTime} to ${this.classDetail.endTime})`
    const detail = {
        product: "Class Enrollment",
        productID: this.enrollmentID,
        orderDescription: `Student(s): ${students.join(', ')}. Enrollment of class: ${classTitle}. New Students: ${this.firstEnroll}`,
        price: this.onlinePrice.toFixed(2),
        transLogP: JSON.stringify(logp),
        transLogA: JSON.stringify(loga),
        status: loga.status,
    };

    this.paymentService.createOne(detail).subscribe(
      (result: { [x: string]: string; }) => {
        console.log('transaction logged: ', result);
      },
      this.onServiceError
    );
  }

  public makePayment() {
    console.log('makePayment: first time: ', this.firstEnroll);
    this.showPayment = true;

    if (this.firstEnroll) {
      this.totalPrice += this.numberStu * NEW_ENROLLMENT_FEE;
      this.onlinePrice = this.totalPrice * ONLINE_TRANS_RATE;
      this.paypalQRPrice = this.totalPrice * PAYPAL_QR_RATE;
    }

    if (this.totalPrice > 0) {
      this.paypalButton(this.onlinePrice);
    }
  }
}
