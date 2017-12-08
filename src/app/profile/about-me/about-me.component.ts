import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  userEmail: any;
  constructor() { }

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail');
    console.log('Saved User: ', this.userEmail);
  }

}
