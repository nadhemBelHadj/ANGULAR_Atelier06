import { User } from './../model/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [{"id":1,"login":"admin","password":"123","roles":['ADMIN']},
                   {"id":2,"login":"nadhem","password":"123","roles":['USER']} ];

  public loggedUser:string;
  public isloggedIn: Boolean = false;
  public roles:string[];

   
  constructor(private router: Router) { }



logout() { 
  this.isloggedIn= false;
  this.loggedUser = undefined;
  this.roles = undefined;
  localStorage.removeItem('loggedUser');
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
  this.router.navigate(['/login']);
}

  SignIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if(user.login=== curUser.login && user.password==curUser.password) {
        validUser = true;
        this.loggedUser = curUser.login;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
    });

     return validUser;
  }

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return (this.roles.indexOf('ADMIN') >-1);
   
  }

  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(login :string){    
    this.users.forEach((curUser) => {
      if( curUser.login == login) {
          this.roles = curUser.roles;
      }
    });
  }

}
