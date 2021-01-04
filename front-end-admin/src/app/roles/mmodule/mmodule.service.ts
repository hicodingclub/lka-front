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
  MmoduleBaseService
} from './mmodule.base.service';
import {
  Roles_SERVER_ROOT_URI
} from '../roles.tokens';
@Injectable({
  providedIn: 'root',
})
export class MmoduleService extends MmoduleBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Roles_SERVER_ROOT_URI) private rolesServerRootUri: string) {
    super(http, rolesServerRootUri);
  }
  ngOnDestroy() {}
}