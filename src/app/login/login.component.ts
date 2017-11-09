import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service'
import { Http, Response, Headers } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  responseData: any;
  employees: any;
  userDetails: any;
  appcomponentValue: string;
  constructor (private router: Router, private fb: FormBuilder, private loginService: LoginService, private toastr: ToastsManager, private _vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(_vcr);
    this.toastr.onClickToast()
    .subscribe( toast => {
      this.toastr.dismissToast(toast);
    });

  }

  ngOnInit() {
    this.userForm	=	this.fb.group({
      username	:	['', Validators.required],
      password	:	['', Validators.required]
    });
  }
  onSubmit() {
    this.appcomponentValue = 'Test Data';
    this.loginService.login(this.userForm.value)
    .subscribe(
      response => {
        this.responseData = response;
        if (response.execution === '1' ) {
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.loginService.userDetail();
          //this.loginService.chkLogin();
          this.toastr.success( 'Success', 'You are on right track.') ;
          this.router.navigate(['./home']);
        } else {
        this.toastr.error('Error', 'Username or Password is wrong please try again!');
        }
      }
    )
  }
}
