import { Component, OnInit } from '@angular/core';


import { ViewContainerRef,  Directive} from '@angular/core';
@Directive({
  selector: '[academics-ref-select]',
})
export class AcademicsRefSelectDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css'],
})
export class AcademicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
