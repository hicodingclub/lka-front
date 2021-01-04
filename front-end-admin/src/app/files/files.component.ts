import {
  Component,
  OnInit
} from '@angular/core';
import {
  ViewContainerRef,
  Directive
} from '@angular/core';
@Directive({
  selector: '[files-ref-select]',
})
export class FilesRefSelectDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}