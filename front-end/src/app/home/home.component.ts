import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageObject = [ {
     imageURL: 'assets/images/chicago.jpg',
     heading: 'chicago',
     subheading: 'c1'
   }, {
     imageURL: 'assets/images/ny.jpg',
     heading: 'ny',
     subheading: 'n1'
   }, {
     imageURL: 'assets/images/la.jpg',
     heading: 'la',
     subheading: 'l1'
   }  ] 

}
