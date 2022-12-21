import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { LoginComponent } from './user/login/login.component';
import { Login2Component } from './user/login2/login2.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  @ViewChild('stepper') stepper!: StepperComponent;
  public route = true;
  currentRoute: any;

  constructor(public router:Router, public location:Location){}

  loginCall(){
    this.router.navigate(['/stepperLogin']);
    this.route = false
    this.currentRoute = window.location.pathname
    console.log(this.router.url);
  }
  
  registerCall(){
    this.router.navigate(['/register']);
    this.route = false
  }
}
