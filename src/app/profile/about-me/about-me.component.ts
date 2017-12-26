import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/user';
import { Router } from '@angular/router';
import { DatingService } from '../../service/datingservice.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  userEmail: any;
  user: IUser = new IUser();
  id: number;
  constructor(private datingService: DatingService, private router: Router) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail');
    // console.log('Saved User: ', this.userEmail);
    // this.datingService.GetProfiles()
    // .subscribe((users: IUser[]) => {
    //   this.user = users.find(prof => prof.Email == this.userEmail);
    //   // this.id = this.user.ID;
    //   // console.log('user',this.user);
    // });
    
  }

  UpdateProfile(){    

    this.datingService.UpdateProfile(this.id, this.user)
    .subscribe(() => {
      console.log('Profile Updated!');
    }, error => { console.log('Error encountered')})
  }

}
