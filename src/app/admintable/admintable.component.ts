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
		bike: 'Bajaj',
		status: 'ready to take',
    date: 12-12-12,
	},
	{
		service: 'General checkup',
		bike: 'Honda',
		status: 'completed', 
    date: 12-12-12,
	},
	
];
 */@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css']
})
export class AdmintableComponent{

	newbooking: Booking[] = [];
	
	ngOnInit(): void {
		const localdata = localStorage.getItem('userbooking')
		if(localdata != null){
		  this.newbooking = JSON.parse(localdata)
		}
	  }


	  constructor(){}

}
