import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

  constructor(private authService :AuthService){}
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean> |  boolean   {
   const isLoggedIn=this.authService.isLoggedIn();
   console.log("canActivated", isLoggedIn);
    return isLoggedIn;
  }
  
}
