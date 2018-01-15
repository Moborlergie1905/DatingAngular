import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatingService } from '../service/datingservice.service';
import { TokenParams } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenParam: TokenParams;
  username: string;
  password: string;

  constructor(private datingService: DatingService) { }
  login(): void{   
    this.datingService.LocalLogin(this.username,this.password)
    .subscribe(
      data => 
        this.tokenParam = data
    );
   
    console.log('Credential:',this.tokenParam);
  }
  ngOnInit() {
  }

}
