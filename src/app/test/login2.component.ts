import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
///import {CoolLocalStorage} from 'angular2-cool-storage';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component implements OnInit {
	//localStorage : CoolLocalStorage;
	credentials = {
		'userName':'',
		'password':''
	}

	constructor(private router: Router, private authService:AuthService ) //localStorage: CoolLocalStorage, 
	{ 
		//this.localStorage = localStorage;
	}

	ngOnInit() {

	}
	onSubmit(){
		
	}
	test(data){
		if(data){
			localStorage.setItem("userData",JSON.stringify(data));
			this.authService.loadUserInfo();
		}
		else{
			localStorage.clear();
		}
	}
}
