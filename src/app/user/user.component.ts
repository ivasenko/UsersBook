import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { User } from './user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
 
    constructor(private http: Http){}
      
    ngOnInit(){
          
        this.http.get('users.json')
        .subscribe((data: User) => this.user = data);
    }
}
