import { Component } from '@angular/core';
import { Booking } from '../user.model';

/* interface allservice {
	service: string;
	bike: string;
	status: string; 
  date: number;
}

const SERVICES: allservice[] = [
	{
		service: 'Water Wash',
		bike: 'Ktm',
		status: 'pending',
    date: 12-12-12,
	},
	{
		service: 'Oil change',
		bike: 'Ktm',
		status: 'pending',
    date: 12-12-12,
	},
	
];
 */

   


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent {
	booked: Booking[] = []

	ngOnInit(): void {
		const localdata = localStorage.getItem('userbooking')
		if(localdata != null){
		  this.booked = JSON.parse(localdata)
		}
	  }


	  constructor(){}
	/* constructor() {
		console.log("userTable ::", localStorage.getItem("userbooking"));
        console.log(this.booked)
		this.booked = [
			{
				"servicetype": 'Water Wash',
				"bike": 'Ktm',
				"status": 'pending',
				"date": '12-12-12',
			},
			{
				"servicetype": 'Oil change',
				"bike": 'Royal Enfield',
				"status": 'pending',
				"date": '12-12-12',
			},
		]
	} */
}
