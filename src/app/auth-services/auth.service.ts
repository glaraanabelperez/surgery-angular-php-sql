import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user:String, password:String):boolean{
    if(user==='user' && password==='1209'){
      let user="user";
      localStorage.setItem('username', user);
      return true;
    }
  }

  logout(){
    localStorage.removeItem('username');
  }

  getUser():any{
    return localStorage.getItem('username');
  }

  isLoggedIn():boolean{
    // if(this.getUser()!==null){
    //   return this.getUser();
    // }
    return this.getUser()!== null;
  }

}
