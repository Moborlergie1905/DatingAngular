import { Component, OnInit } from '@angular/core';
import { DatingService } from '../service/datingservice.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { IUser, TokenReg, LoginAccess } from '../model/user';
import { DbOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { Router } from '@angular/router';
import { MonthDay } from '../shared/month-day';
// import { Profile } from '../profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  users: IUser[];
  // user: IUser;
  user: IUser = new IUser();
  tokenReg: TokenReg = new TokenReg();
  access: LoginAccess = new LoginAccess();

  dd: string;
  mm: string;
  yy: string;
  dateString: string;
  newDate: Date;
  // months: MonthDay;
  // days: any;
  // years: any;
  resetForm(form: NgForm){
    form.reset();   
  }

  years = [
    {val:'1990', display:'1990'},
    {val:'1991', display:'1991'},
    {val:'1992', display:'1992'},
    {val:'1993', display:'1993'},
    {val:'1994', display:'1994'},
    {val:'1995', display:'1995'},
    {val:'1996', display:'1996'},
    {val:'1997', display:'1997'},
    {val:'1998', display:'1998'}
  ]
  months =  [
    {val:1, display:'Jan'},
    {val:2, display:'Feb'},
    {val:3, display:'Mar'},
    {val:4, display:'Apr'},
    {val:5, display:'May'},
    {val:6, display:'Jun'},
    {val:7, display:'Jul'},
    {val:8, display:'Aug'},
    {val:9, display:'Sep'},
    {val:10, display:'Oct'},
    {val:11, display:'Nov'},
    {val:12, display:'Dec'}
];

days = [
  {val:1, display:'01'},
  {val:2, display:'02'},
  {val:3, display:'03'},
  {val:4, display:'04'},
  {val:5, display:'05'},
  {val:6, display:'06'},
  {val:7, display:'07'},
  {val:8, display:'08'},
  {val:9, display:'09'},
  {val:10, display:'10'},
];


  
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

  states = [
    {val:'Lagos', display:'Lagos' },
    {val:'Ogun', display:'Ogun' },
    {val:'Ondo', display:'Ondo' },
    {val:'Osun', display:'Osun' },
    {val:'Oyo', display:'Oyo' }
  ];

  relTypes = [
    {val:'Short Term', display:'Short Term'},
    {val:'Long Term', display:'Long Term'}
  ]; 
 
 
  constructor(private datingService: DatingService, private router: Router) { }
 
  ngOnInit() {     
    
  }  
  newProfile(){
    let dateString = (this.yy + '-' + this.mm  + '-' + this.dd);
    this.user.DOB = new Date(dateString)
    this.datingService.CreateProfile(this.user)    
     .subscribe(data => this.user = data);
        // .then(res => this.user = res);        
        // localStorage.setItem('userEmail',this.user.Email);
        // this.router.navigate(['profile/about-me']);
        // console.log('Data',this.user);
        this.tokenReg.Email = this.user.Email;
        this.tokenReg.Password = this.user.Password;
        this.tokenReg.ConfirmPassword = this.user.Password;
    this.datingService.TokenBasedRegister(this.tokenReg)
        .subscribe(dat => this.tokenReg = dat);
        // console.log('Data',this.tokenReg);


        // this.access.username = this.user.Email;
        // this.access.password = this.user.Password;
        // this.access.grant_type = 'password';
       
        let userName = this.user.Email;
        let password = this.user.Password;
        this.datingService.LocalLogin(userName,password)
        .subscribe(login => console.log('login:',login.access_token));
        // this.router.navigate(['user'])
        
  }

  // onSubmit(form: NgForm){

  // }

  // GetDaysFromMonth(m: number){
  //   if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){

  //   }
  // }


} 


// newProfile(FirstName:string,LastName:string,Gender:string,Email:string,Password:string,Country:string,City:string,DOB:Date){
  //   this.datingService.CreateProfile(FirstName,LastName,Gender,Email,Password,Country,City,DOB)
  //       .then(prof => console.log(prof));
        // error => {
        //     this.statusMsg = "Error Accessing Webservice";
        //   }                          
        // );
        // this.router.navigate(['profile/about-me']); 
  // }
