import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.isLoggedIn()){
     return true; 
    }
    return false;


  }

  public isLoggedIn(): boolean{
    let status = false;
    if(localStorage.getItem('isLoggedIn') == "true"){
      status = true;
    } else {
      status = false;
    }

    return status;
  }

  public logout(){
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    //localStorage.clear();

  }
}
