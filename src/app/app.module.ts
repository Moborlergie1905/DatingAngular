import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatelistComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
