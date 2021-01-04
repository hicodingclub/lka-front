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
  KeynoteBaseService
} from './keynote.base.service';
import {
  Publicinfo_SERVER_ROOT_URI
} from '../publicinfo.tokens';
@Injectable({
  providedIn: 'root',
})
export class KeynoteService extends KeynoteBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Publicinfo_SERVER_ROOT_URI) private publicinfoServerRootUri: string) {
    super(http, publicinfoServerRootUri);
  }
  ngOnDestroy() {}
}