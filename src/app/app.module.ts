import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './User/home/home.component';
import { MyordersComponent } from './User/myorders/myorders.component';
import { OfferzoneComponent } from './User/offerzone/offerzone.component';
import { AboutusComponent } from './User/aboutus/aboutus.component';
import { ContactusComponent } from './User/contactus/contactus.component';
import { HomepageComponent } from './Master/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyordersComponent,
    OfferzoneComponent,
    AboutusComponent,
    ContactusComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
