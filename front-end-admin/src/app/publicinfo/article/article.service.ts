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
  ArticleBaseService
} from './article.base.service';
import {
  Publicinfo_SERVER_ROOT_URI
} from '../publicinfo.tokens';
@Injectable({
  providedIn: 'root',
})
export class ArticleService extends ArticleBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Publicinfo_SERVER_ROOT_URI) private publicinfoServerRootUri: string) {
    super(http, publicinfoServerRootUri);
  }
  ngOnDestroy() {}
}