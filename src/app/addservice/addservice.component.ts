import { Component } from '@angular/core';
import { availableservice } from '../user.model';


/* interface availableservice {
	service: string;
} */

/* const SERVICES: availableservice[] = [
	{
		service: 'Water Wash'
	},
  {
		service: 'Oil Change'
	},
  {
		service: 'General Checkup'
	},
]; */



@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent {
   services: availableservice[] = [];

  newservice:any = {
    serviceid:0,
    addedservice: ''
  };
  



  submit:boolean=false;

  ngOnInit(): void {
    const localdata = localStorage.getItem('services')
    if(localdata != null){
      this.services = JSON.parse(localdata)
    }
  }

  addservice(){
	console.log(this.newservice.addedservice);
  this.newservice.serviceid = this.services.length +1
	this.services.push(this.newservice)
  localStorage.setItem('services', JSON.stringify(this.services))
  this.newservice = {
    serviceid:0,
    addedservice: ''
  };
  }

  onEdit(stud: any){
    this.newservice = stud
    
    
  }

  onDelete(id: number){
    for(let i=0; i < this.services.length; i++) {
      if(this.services[i].serviceid == id) {
        this.services.splice(i,1)
      }
    }
    localStorage.setItem('services', JSON.stringify(this.services))
  }

}
