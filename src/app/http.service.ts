import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()

export class HttpService {
  url = 'https://api.github.com/users/';
  username: String = '';

  info: any;

  constructor(private _http: Http)  {
  }

  getUserData(callback, username) {
    console.log('get user data');
    console.log(this.url + username);
    return this._http.get(this.url + username).subscribe(
      (response) => { this.info =  response.json(), callback(this.info); }, // <— first method
      (error) => { console.log(error); } // <— second method
    );
  }

}
