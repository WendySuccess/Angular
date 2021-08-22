import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: Array<User> = [];

  constructor(private _hhtp: HttpClient) { }

  ngOnInit(): void {
    this._hhtp.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((result) =>{
      this.userList = result;
      console.log(this.userList);
    },(error) => {
      console.log('this is some error');
      console.log(error);
    });
  }

  deleteUser(id: any){
    if(confirm('Are you sure to delete this user'))
      this._hhtp.delete('https://jsonplaceholder.typicode.com/users' + id).subscribe(result =>{
       console.log(result);
       alert('User Deleted successfully')
       },(error) => {
        console.log('this is some error');
        console.log(error);
       });
     }
  }


