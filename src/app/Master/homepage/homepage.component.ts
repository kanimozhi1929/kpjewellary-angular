import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

gotohome()
{
  this.router.navigate(['/home'])
}

gotoaboutus()
{
  this.router.navigate(['/aboutus'])
}
gotocontactus()
{
  this.router.navigate(['/contactus'])
}
gotomyorders()
{
  this.router.navigate(['/myorders'])
}
gotoofferzone()
{
  this.router.navigate(['/offerzone'])
}
}
