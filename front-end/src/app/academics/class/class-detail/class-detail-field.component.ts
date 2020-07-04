import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ClassComponent, ViewType } from '../class.component';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-detail-field',
  templateUrl: './class-detail-field.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailFieldComponent extends ClassComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public classService: ClassService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(null,
                classService, injector, router, route, location);
          this.view = ViewType.DETAIL;
          
          this.fieldDisplayNames = {
            'title': 'Title',
            'description': 'Description',
            'course': 'Program',
            'teacher': 'Instructor',
            'price': 'Price',
            'season': 'Season',
            'startTime': 'Start Time',
            'endTime': 'End Time',
            'duration': 'Duration',
            'dayOfWeek': 'Day of Week',
            'timeSlot': 'Time Slot',
            'enrollTerm': 'Enroll Term',
          };
          this.enums['dayOfWeek'] = [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
          ];
          this.stringFields.push('title');
          this.stringFields.push('description');
          this.stringFields.push('price');
          this.stringFields.push('season');
          this.stringFields.push('duration');
          this.stringFields.push('timeSlot');
          this.referenceFields = [
            'course',
            'teacher',
            'enrollTerm',
          ];
          this.dateFields = [
            'startTime',
            'endTime',
          ];
          this.multiSelectionFields = [
            'dayOfWeek', 
          ];
          this.viewHiddenFields = [
            'enrollTerm',
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
