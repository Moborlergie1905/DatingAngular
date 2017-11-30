import { Component, OnInit } from '@angular/core';
import { DatingService } from '../service/datingservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../model/user';
import { DbOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { Router } from '@angular/router';
// import { Profile } from '../profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: IUser[];
  user: IUser;
  msg: string;
  indLoading: boolean = false;
  userFrm: FormGroup;
  dbops: DbOperation;

  genders = [
    {
      value:'Female',viewValue:'Female'
    },
    {
      value:'Male',viewValue:'Male'
    }   
  ];

  countries = [
    {value:'Nigeria', viewValue:'Nigeria'}
  ];

  startDate = new Date(1990, 0, 1);

  statusMsg: string = "";
 
  constructor(private datingService: DatingService, private router: Router) { }

  ngOnInit() {    
  }

  newProfile(FirstName:string,LastName:string,Gender:string,Email:string,Password:string,Country:string,City:string,DOB:Date){
    this.datingService.CreateProfile(FirstName,LastName,Gender,Email,Password,Country,City,DOB)
        .then((prof) => 
          console.log(prof), (error) => {
            this.statusMsg = "Error Accessing Webservice";
          }                          
        );
        this.router.navigate(['/about-me']); 
  }
  

}
