import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitor } from '../models/visitor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  visitor : Visitor = new Visitor;

  constructor(private _http:HttpClient , private _router:Router) { }

  ngOnInit(): void {

  }

  register(){

    console.log(this.visitor);
    this._http.post('http://localhost:3000/visitors', this.visitor).subscribe(result=>{
      console.log(result);
      alert('success register')
      this._router.navigate(['/login']);
    },error =>{
      console.log(error);
    })

  }

}
