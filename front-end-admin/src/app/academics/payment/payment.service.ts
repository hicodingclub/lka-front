import {
  Injectable,
  Inject,
  OnDestroy,
  SkipSelf
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  PaymentBaseService
} from './payment.base.service';
import {
  Academics_SERVER_ROOT_URI
} from '../academics.tokens';
@Injectable({
  providedIn: 'root',
})
export class PaymentService extends PaymentBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Academics_SERVER_ROOT_URI) private academicsServerRootUri: string) {
    super(http, academicsServerRootUri);
  }
  ngOnDestroy() {}
}