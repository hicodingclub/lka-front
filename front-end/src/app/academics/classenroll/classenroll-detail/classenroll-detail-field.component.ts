import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassenrollComponent, ViewType } from '../classenroll.component';
import { ClassenrollService } from '../classenroll.service';

@Component({
  selector: 'app-classenroll-detail-field',
  templateUrl: './classenroll-detail-field.component.html',
  styleUrls: ['./classenroll-detail.component.css']
})
export class ClassenrollDetailFieldComponent extends ClassenrollComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public classenrollService: ClassenrollService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(null,
                classenrollService, injector, router, route, location);
          this.view = ViewType.DETAIL;
          
          this.fieldDisplayNames = {
            'student': 'Student',
            'class': 'Class',
            'status': 'Status',
            'notes': 'Notes',
            'createdAt': 'Created Time',
          };
          this.enums['status'] = [
            'processing',
            'paid',
            'confirmed',
            'cancelled',
          ];
          this.stringFields.push('status');
          this.stringFields.push('notes');
          this.referenceFields = [
            'class',
          ];
          this.dateFields = [
            'createdAt',
          ];
          this.arrayFields = [
            ['student', 'ObjectId'],
          ];
          this.referenceFieldsMap['student'] = 'student';
          this.referenceFieldsReverseMap['student'] = 'student';
          this.textareaFields = [
            'notes',
          ];
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
