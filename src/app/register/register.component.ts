import { Component } from '@angular/core';
import { User } from '../user.model';

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

      private users: User[] = [];

      submit: boolean = false;
    constructor(){}

    userRegister():void{
      debugger
      this.users.push(this.register);
      localStorage.setItem('users', JSON.stringify(this.users));
      this.register = {
        email: '',
        mobile: '',
        password: ''
      }
    }

}
