import {
  Component,
  OnInit,
  Input
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
  ArticleComponent,
  ViewType
} from '../article.component';
import {
  ArticleService
} from '../article.service';
@Component({
  selector: 'app-article-detail-field',
  templateUrl: './article-detail-field.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailFieldComponent extends ArticleComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public articleService: ArticleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(articleService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'signaturePicture': 'Signature Picture',
      'title': 'Title',
      'author': 'Author',
      'publishDate': 'Publish Date',
      'content': 'Content',
    };
    this.stringFields.push('signaturePicture');
    this.stringFields.push('title');
    this.stringFields.push('author');
    this.stringFields.push('content');
    this.dateFields = ['publishDate', ];
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