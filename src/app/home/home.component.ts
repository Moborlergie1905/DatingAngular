import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  days = [
    {value:'1', viewValue:'01'},
    {value:'2', viewValue:'02'},
    {value:'3', viewValue:'03'},
    {value:'4', viewValue:'04'},
    {value:'5', viewValue:'05'}
  ]
  // profile = new Profile();
  constructor() { }

  ngOnInit() {
    
  }

}
