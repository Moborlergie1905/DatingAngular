import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutDateComponent } from './about-date/about-date.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { AuthGuard } from '../auth.guard';

const profileRoute: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,       
        children:[            
            { path: 'about-me', component: AboutMeComponent },
            { path: 'about-date', component: AboutDateComponent }            
        ]
    }    
];

@NgModule({
    imports: [
        RouterModule.forChild(profileRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class ProfileRoutingModule{}