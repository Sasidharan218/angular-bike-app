import { Component, VERSION } from '@angular/core';
import { availableservice } from '../user.model';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  services: availableservice[] = [];

  opened: boolean = false;

  ngOnInit():void{
    const localdata = localStorage.getItem('services')
  if(localdata != null){
    this.services = JSON.parse(localdata)
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

}
