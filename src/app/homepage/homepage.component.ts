import { Component } from '@angular/core';
import { Booking } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
/*     service: String = '';
    bike: String = '';
    date: Date | null = null; */

    booking : Booking[] = []

     newbooking: any = {
        bike:'',
        date:'',
        servicetype:'',
        status:'pending'
     }

     
    submit: boolean = false;

    constructor(private router : Router){}

    ngOnInit():void{}

    

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
