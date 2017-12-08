import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatingService } from './service/datingservice.service';
import { 
         MatInputModule, 
         MatButtonModule, 
         MatSelectModule,
         MatMenuModule,
         MatDatepickerModule,
         MatNativeDateModule
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
import { Http, HttpModule } from '@angular/http';
import { ConfigService } from './shared/config.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProfileModule } from './profile/profile.module';
import { AuthGuard } from './auth.guard';


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
    PageNotFoundComponent    
    
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule, 
    MatDatepickerModule,   
    MatNativeDateModule,
    HttpModule   
  ],
  providers: [   
    DatingService,
    FormBuilder,
    ConfigService,
    AuthGuard   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
