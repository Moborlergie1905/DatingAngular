import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutDateComponent } from './about-date/about-date.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
    declarations: [
        AboutMeComponent, 
        AboutDateComponent, 
        ProfileHomeComponent       
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule
    ],
    providers: []   
})

export class ProfileModule{}