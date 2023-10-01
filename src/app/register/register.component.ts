import { Component } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
     /*  email: string = '';
      mobile: number | null = null;
      password: string = ''; */

      

      register: any = {
        email: '',
        mobile: '',
        password: ''
      }

       users: User[] = [];

      submit: boolean = false;
    constructor(private router: Router){}

    userRegister():void{
      
      this.users.push(this.register);
      localStorage.setItem('users', JSON.stringify(this.users));
      this.register = {
        email: '',
        mobile: '',
        password: ''
      }
      localStorage.setItem('loggedInUser', this.register.email);
      this.router.navigate(['/home']);
    }

}
