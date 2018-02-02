import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';

@Injectable()
export class UsersServiceService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get('users.json')
}
}
