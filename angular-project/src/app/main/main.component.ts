import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _authGuard: AuthGuard,private _router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    if(confirm('Are you sure to logout?')){
      this._authGuard.logout()
      alert('Loggedout successfully');
      this._router.navigate(['/login']);
    }
  }

  loginStatus(){
    if(this._authGuard.isLoggedIn()){
      return true;
  }else{
    return false;
  }

}

}
