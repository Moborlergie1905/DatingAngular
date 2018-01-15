import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { UserComponent } from './user.component';
import { DateListComponent } from './date-list.component';
import { DateDetailComponent } from './date-detail.component';
import { ChatComponent } from './chat.component';
import { DateFeedComponent } from './date-feed.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [
    UserHomeComponent,
    UserComponent,
    DateListComponent,
    DateDetailComponent,
    ChatComponent,
    DateFeedComponent
     
  ]
})
export class AccountModule { }
