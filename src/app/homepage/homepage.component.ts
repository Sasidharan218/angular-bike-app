import { Component,VERSION } from '@angular/core';
import { Booking, User } from '../user.model';
import { Router } from '@angular/router';
import { availableservice } from '../user.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [NgbCarouselConfig] 
})
export class HomepageComponent {
/*     service: String = '';
    bike: String = '';
    date: Date | null = null; */

    booking : Booking[] = []
    user : User[] = []
   services: availableservice[] = [];

     newbooking: any = {
        bike:'',
        date:'',
        servicetype:'',
        status:'pending'
     }

     
    submit: boolean = false;


    ngOnInit():void{
      const localdata = localStorage.getItem('services')
    if(localdata != null){
      this.services = JSON.parse(localdata)
    }
    const username = localStorage.getItem('users')
    if(username != null){
      this.user = JSON.parse(username)
    }
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    }

    name = 'Angular ' + VERSION.major;

  constructor(config: NgbCarouselConfig,private router : Router) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

    onBooking(){
      
      console.log(this.newbooking.servicetype,this.newbooking.bike,this.newbooking.date)
      this.booking.push(this.newbooking)
      localStorage.setItem('userbooking',JSON.stringify(this.booking))
      this.newbooking= {
        bike:'',
        date:'',
        servicetype:'',
        status:'pending'
     }
     this.router.navigate(['/usertable']);
    }
}
