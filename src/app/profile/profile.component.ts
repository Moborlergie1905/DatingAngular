import { Component, OnInit, ViewChild } from '@angular/core';
import { DatingService } from '../service/datingservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../model/user';
import { DbOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: IUser[];
  user: IUser;
  msg: string;
  indLoading: boolean = false;
  userFrm: FormGroup;
  dbops: DbOperation;

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
  
    switch (this.dbops) {
      case DbOperation.create:
        this._userService.post(Global.BASE_USER_ENDPOINT, formData._value)
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
             
            // this.modal.dismiss();
          },
          error => {
           this.msg = error;
          }
        );
        break;
      case DbOperation.update:
        this._userService.put(Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value)
        .subscribe(
          data => {
            if (data == 1) //Success
            {
              this.msg = "Data successfully updated.";
              // this.LoadUsers();
            }
            else {
              this.msg = "There is some issue in saving records, please contact to system administrator!"
            }

            // this.modal.dismiss();
          },
          error => {
            this.msg = error;
          }
        );
        break;
      case DbOperation.delete:
        this._userService.delete(Global.BASE_USER_ENDPOINT, formData._value.Id)
        .subscribe(
          data => {
            if (data == 1) //Success
            {
              this.msg = "Data successfully deleted.";
              // this.LoadUsers();
            }
            else {
              this.msg = "There is some issue in saving records, please contact to system administrator!"
            }

            // this.modal.dismiss();
          },
          error => {
            this.msg = error;
          }
        );
        break;

    }
  }

}
