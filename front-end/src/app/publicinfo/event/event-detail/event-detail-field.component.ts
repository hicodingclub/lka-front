import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { EventComponent, ViewType } from '../event.component';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail-field',
  templateUrl: './event-detail-field.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailFieldComponent extends EventComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public eventService: EventService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                eventService, injector, router, route, location, ViewType.DETAIL);
          
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
