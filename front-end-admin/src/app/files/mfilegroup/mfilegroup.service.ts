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
  MfilegroupBaseService
} from './mfilegroup.base.service';
import {
  Files_SERVER_ROOT_URI
} from '../files.tokens';
@Injectable({
  providedIn: 'root',
})
export class MfilegroupService extends MfilegroupBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Files_SERVER_ROOT_URI) private filesServerRootUri: string) {
    super(http, filesServerRootUri);
  }
  ngOnDestroy() {}
}