import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  mensajerror:String;
  titulo="";
  constructor( public authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login( username: String, password: String) :boolean {
    this.mensajerror="";
    if(!this.authService.login(username, password)){
      this.mensajerror="Login Incorrecto";
      setTimeout(function(){
        this.mensajerror="";
      }.bind(this), 2500);
    }else{
      this.titulo=this.authService.getUser();
    }
    
    return false;
  }

  logOut() :boolean{
    this.authService.logout();
    this.router.navigate(['/home']);
    return false;
  }


}
