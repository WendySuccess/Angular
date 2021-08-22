import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  id: any;
 user: User = new User();
  constructor(private _route: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit(): void {
    this.id= this._route.snapshot.paramMap.get('id');
    console.log(this.id);
    
    this._http.get<User>('https://jsonplaceholder.typicode.com/users/' + this.id).subscribe((result) =>{
      console.log(result);
      this.user = result; 
    },(error) => {
      console.log('this is some error');
      console.log(error);
    });
  }

 updateUser(){
  this._http.put('https://jsonplaceholder.typicode.com/users/' + this.id, this.user).subscribe((result) =>{
   alert('Success updated');
   console.log(result);
  },(error) => {
    console.log('this is some error');
    console.log(error);
  });

 }

}
