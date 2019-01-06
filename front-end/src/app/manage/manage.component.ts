import { Component, OnInit } from '@angular/core';


import { ViewContainerRef,  Directive} from '@angular/core';
@Directive({
  selector: '[manage-ref-select]',
})
export class ManageRefSelectDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
 
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
