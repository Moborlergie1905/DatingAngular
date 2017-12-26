import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home.component';
import { DateListComponent } from './date-list.component';
import { DateDetailComponent } from './date-detail.component';
import { ChatComponent } from './chat.component';
import { DateFeedComponent } from './date-feed.component';

const accountRoute: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path:'', component: UserHomeComponent },
      { path:'match-detail/:id', component: DateDetailComponent },
      { path:'available-match', component: DateFeedComponent },  
      { path: 'chat', component: ChatComponent}   
    ]
  }  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoute)
  ],
  exports:[
    RouterModule
  ]
})
export class AccountRoutingModule { }
