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
  EmailsettingsBaseService
} from './emailsettings.base.service';
import {
  Emailing_SERVER_ROOT_URI
} from '../emailing.tokens';
@Injectable({
  providedIn: 'root',
})
export class EmailsettingsService extends EmailsettingsBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Emailing_SERVER_ROOT_URI) private emailingServerRootUri: string) {
    super(http, emailingServerRootUri);
  }
  ngOnDestroy() {}
}