import { Component, OnInit } from '@angular/core';
import { DatingService } from '../service/datingservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../model/user';
import { DbOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
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
  // days = [
  //   {value:'1', viewValue:'01'},
  //   {value:'2', viewValue:'02'},
  //   {value:'3', viewValue:'03'},
  //   {value:'4', viewValue:'04'},
  //   {value:'5', viewValue:'05'}
  // ]
  // profile = new Profile();
  constructor(private fb: FormBuilder, private _userService: DatingService) { }

  ngOnInit(): void {
    this.userFrm = this.fb.group({
      Id: [''],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Gender: [''],
      Country: [''],
      City: [''],
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
    this.LoadUsers();   
  }
  LoadUsers(): void{
    this.indLoading = true;
    this._userService.get(Global.BASE_USER_ENDPOINT)
     .subscribe(users => { this.users = users; this.indLoading = false; },
     error => this.msg = <any>error);
  }

  onSubmit(formData: any) {
    this.msg = "";
  
    // switch (this.dbops) {
    //   case DbOperation.create:
        this._userService.post(Global.BASE_USER_ENDPOINT + 'api/profile', formData._value)
        .subscribe(
          data => {
            if (data == 1) //Success
            {
              this.msg = "Data successfully added.";
              // this.LoadUsers();
            }
            else
            {
              this.msg = "There is some issue in saving records, please contact to system administrator!"
            }             
            
          },
          error => {
           this.msg = error;
          }
        );
    //     break;
    //   case DbOperation.update:
    //     this._userService.put(Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value)
    //     .subscribe(
    //       data => {
    //         if (data == 1) //Success
    //         {
    //           this.msg = "Data successfully updated.";
    //           // this.LoadUsers();
    //         }
    //         else {
    //           this.msg = "There is some issue in saving records, please contact to system administrator!"
    //         }
            
    //       },
    //       error => {
    //         this.msg = error;
    //       }
    //     );
    //     break;
    //   case DbOperation.delete:
    //     this._userService.delete(Global.BASE_USER_ENDPOINT, formData._value.Id)
    //     .subscribe(
    //       data => {
    //         if (data == 1) //Success
    //         {
    //           this.msg = "Data successfully deleted.";
    //           // this.LoadUsers();
    //         }
    //         else {
    //           this.msg = "There is some issue in saving records, please contact to system administrator!"
    //         }
            
    //       },
    //       error => {
    //         this.msg = error;
    //       }
    //     );
    //     break;

    // }
  }

}
