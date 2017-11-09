import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
//import {CoolLocalStorage} from 'angular2-cool-storage';
import {Router} from '@angular/router';
//import * as _ from 'underscore';
declare var window: any;

@Injectable()
export class AuthService {
  loggedInUser: any;
  isUserLoggedIn: boolean = false;
  userName:any;
  constructor(private http: Http, private router: Router) {//private localStorage: CoolLocalStorage
    this.loadUserInfo();
  }
 loadUserInfo() {
    const user = localStorage.getItem('userData') ? localStorage.getItem('userData') + '' : '';
    if (user) {
      this.loggedInUser = JSON.parse(user);
      if (this.loggedInUser) {
        this.isUserLoggedIn = true;
      }
    }
    else {
    	this.isUserLoggedIn = false;
    }
  }

getUserData(){
	let username
	 username = this.loggedInUser.userName;
	 return username
}

}