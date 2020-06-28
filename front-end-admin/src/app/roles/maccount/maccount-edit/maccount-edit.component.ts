import { Component, OnInit, AfterViewInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

declare const $: any;

import { MaccountEditCustComponent } from '../../../roles-cust/base/maccount/maccount-edit.cust.component';
import { ViewType } from '../maccount.component';
import { MaccountService } from '../maccount.service';







@Component({
  selector: 'app-maccount-edit',
  templateUrl: './maccount-edit.component.html',
  styleUrls: ['./maccount-edit.component.css']
})
export class MaccountEditComponent extends MaccountEditCustComponent implements OnInit, AfterViewInit {        
    // @Input() 
    // public id: string;
    // @Input()
    // public cid: string; // copy id
    // @Input()
    // public initData: any; // some fields has data already. eg: {a: b}. Used for add
    // @Output()
    // public doneData = new EventEmitter<boolean>();
    // @Output()
    // public done = new EventEmitter<any>();
    // @Input()
    // public embeddedView: boolean;
    // @Input()
    // public embedMode: string; // parent to tell the action - create

    public action: string;
    public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};



    constructor(
      public maccountService: MaccountService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                maccountService, injector, router, route, location, ViewType.EDIT);

          this.fieldDisplayNames = {
            'username': 'Username',
            'email': 'Email',
            'phone': 'Phone',
            'firstname': 'Firstname',
            'lastname': 'Lastname',
            'status': 'Status',
            'password': 'Password',
          };
          this.enums['status'] = [
            'Enabled',
            'Disabled',
            'Pending',
          ];
          this.stringFields.push('username');
          this.stringFields.push('email');
          this.stringFields.push('phone');
          this.stringFields.push('firstname');
          this.stringFields.push('lastname');
          this.stringFields.push('status');
          this.stringFields.push('password');

          
          const detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
      super.ngOnInit();
      if (this.embedMode == 'create') { // parent ask to create
        this.action='Create';
        this.getDetailData();
      } else {
        if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action='Edit';
            this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
        }
        else {
            this.action='Create';
            if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            } else {
              this.getDetailData();
            }
        }
      }
      // get editHintFields
      this.searchHintFieldValues();
    }

    ngAfterViewInit() {
      // Initialize all tooltips
      $('[data-toggle="tooltip"]').tooltip();
    }

    getDetailData() {
      if (this.initData) {
        this.action='Add';
        let detail = {
          status: "Enabled",
        };
        for (let prop of Object.keys(this.initData)) {
            detail[prop] = this.initData[prop];
            this.hiddenFields.push(prop);
        }
        this.detail = this.formatDetail(detail);
      } else {
          let detail = {
            status: "Enabled",
          };
          this.detail = this.formatDetail(detail);
      }
    }
}
