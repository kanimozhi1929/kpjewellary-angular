import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Master/homepage/homepage.component';
import { AboutusComponent } from './User/aboutus/aboutus.component';
import { ContactusComponent } from './User/contactus/contactus.component';
import { HomeComponent } from './User/home/home.component';
import { MyordersComponent } from './User/myorders/myorders.component';

const routes: Routes = [
  {path:'Homepage', component: HomepageComponent},
  {path:'home', component: HomeComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'myorders', component: MyordersComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
