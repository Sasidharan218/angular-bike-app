import { Component } from '@angular/core';
import { Booking } from '../user.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
/*     service: String = '';
    bike: String = '';
    date: Date | null = null; */


     newbooking: any = {
        bike:'',
        date:'',
        servicetype:''
     }

    private booking : Booking[] = []
    submit: boolean = false;

    onBooking(){
      console.log(this.newbooking.servicetype,this.newbooking.bike,this.newbooking.date)
      this.booking.push(this.newbooking)
      localStorage.setItem('userbooking',JSON.stringify(this.newbooking))
      this.newbooking= {
        bike:'',
        date:'',
        servicetype:''
     }

    }
}
