import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitor } from '../models/visitor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visitor : Visitor = new Visitor;
  visitors: Visitor[] = [];

  constructor(private _router: Router, private _http:HttpClient) { }

  ngOnInit(): void {
    this._http.get<Visitor[]>('http://localhost:3000/visitors').subscribe(result =>{
      this.visitors= result;
    },error=>{
      console.log(error);
    })
    
  }

  login(){
    if(this.checkLogin()){
      alert('you are loggin sucessfully .')
          localStorage.setItem("isLoggedIn","true");
          localStorage.setItem("Username",this.visitor.username );
          this._router.navigate(['/quiz']);
    
  }else
    {
      alert('Login Failed. you can try again')

    }

    }

    checkLogin(){
      for(let i = 0; i< this.visitors.length;i++){
        if(this.visitors[i].username == this.visitor.username &&
          this.visitors[i].password == this.visitor.password ){
            console.log(this.visitor);
            return true;
        }
      }
          return false;
        
    }


  }

  // login(){
  //   console.log(this.visitor);
  //   if(this.visitor.username == "admin" && this.visitor.password =="admin"){
  //     alert('you are loggin sucessfully .')
  //     localStorage.setItem("isLoggedIn","true");
  //     localStorage.setItem("Username",this.visitor.username );
  //     this._router.navigate(['/home']);
  //   }else
  //   {
  //     alert('Login Failed')

  //   }
  // }


