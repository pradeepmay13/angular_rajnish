import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SimpleNotificationsModule } from 'angular2-notifications';


//import { CustomOption } from './custom-option';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppRoutingModule } from './app-routing.module';
import { routingComponent } from './app-routing.module';
import { DataTableModule } from 'angular-4-data-table';
import { AuthGuard } from './auth-guard/auth.guard';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './login/login.service';
import { AuthService } from './services/auth.service';
//import {CoolLocalStorage} from 'angular2-cool-storage';
import {Login2Component} from './test/login2.component';
//import { Datatable2Component } from './datatable2/datatable2.component';
//import { ToastOptions } from 'ng2-toastr';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    Login2Component,
    //DatatableComponent,
    //Datatable2Component
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastModule.forRoot(), // ToastrModule added
    SimpleNotificationsModule.forRoot(),
    DataTableModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AuthGuard, LoginService, AuthService, //CoolLocalStorage //{
            //provide: ToastOptions, useClass: CustomOption
        //}
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
