import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


  
})
export class LoginComponent {
  
  /* email:string ='';
  password:string =''; */

  login: any = {
    email: '',
    password: ''
  }

  private users: User[] = [];

  submit: boolean= false;

  constructor(private router: Router){}

  ngOnInit(): void {
    const localdata = localStorage.getItem('users')
    if(localdata != null){
      this.users = JSON.parse(localdata)
    }
  }

  loginuser(){
    const userexist =this.users.find(m => m.email == this.login.email && m.password == this.login.password)
    if (this.login.email === 'admin' && this.login.password === 'admin') {
      this.router.navigate(['/dashboard']);
    } else if(userexist == undefined) {
      alert('wrong')
    }else{
      localStorage.setItem('loggedInUser', this.login.email);
      this.router.navigate(['/home']);
    }
   
  }

}
