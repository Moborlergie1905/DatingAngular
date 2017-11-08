import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DatingService } from './service/datingservice.service';
import { 
         MatInputModule, 
         MatButtonModule, 
         MatSelectModule,
         MatMenuModule
       } from '@angular/material';
import 'hammerjs';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatelistComponent } from './datelist/datelist.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { InterestComponent } from './interest/interest.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatelistComponent,
    NavBarComponent,
    ProfileComponent,
    MessageComponent,
    InterestComponent,
    LoginComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
   
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      { 
        path: 'profile', 
        component: ProfileComponent 
      },
      { 
        path: 'message', 
        component: MessageComponent 
      },
      { 
        path: 'interest', 
        component: InterestComponent 
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
     ])
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    DatingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
