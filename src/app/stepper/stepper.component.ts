import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginComponent } from '../user/login/login.component';
import { Login2Component } from '../user/login2/login2.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  // @ViewChild('stepOne') firstFormGroup!: LoginComponent;
  // @ViewChild('stepTwo') secondFormGroup!: Login2Component;

  // isEditable = false;
  // isLinear = false;
  // form1: any;
  // form2: any;
  // constructor(private cdr: ChangeDetectorRef) { }

  // ngAfterViewInit() {
  //   this.form1 = this.firstFormGroup.firstFormGroup;
  //   this.form2 = this.secondFormGroup.secondFormGroup
  //   this.cdr.detectChanges();
  // }


  // get frmStepOne() {
  //   return this.firstFormGroup ? this.firstFormGroup.loginForm : null;
  // }

  // get frmStepTwo() {
  //   return this.secondFormGroup ? this.secondFormGroup.login2Form : null;
  // }


  public username: string | undefined;
  public password: string | undefined;
  loginForm: any;
  public firstFormGroup!: FormGroup;
  public valid: boolean | undefined;
  public completed!: boolean;
  public secondCompleted!: boolean;
  public code!: number;
  login2Form: any;
  public secondFormGroup!: FormGroup;

  constructor(private userService: UserService, public router: Router, private formBuilder: FormBuilder) { }


  isLinear = true;

  ngOnInit() {
    this.loginForm = new FormGroup({});
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.login2Form = new FormGroup({});
    this.secondFormGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  login(loginForm: any, stepper: MatStepper) {
    this.userService.login(loginForm.value.username,
      loginForm.value.password).subscribe((resp: any) => {
        if (resp != undefined) {
          localStorage.setItem('code', resp);
          localStorage.setItem('username', loginForm.value.username);
          localStorage.setItem('password', loginForm.value.password);
          alert("Uspesan prvi korak!");
          this.valid = true;
          this.code = resp;
          this.completed = true;
          stepper.next();
        }
        else {
          alert("Wrong username or password");
        }
      })
  }

  login2(login2Form: any, stepper: MatStepper) {
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    console.log(username!)
    console.log(password!)
    console.log(login2Form.value.code)
    this.userService.login2(username!, password!, login2Form.value.code).subscribe((resp: any) => {
      console.log(resp)
      if (resp != undefined) {
        localStorage.setItem('token', resp.token);
        alert("Uspesno ste ulogovani")
        this.secondCompleted = true;
        stepper.next();
      }
      else {
        alert("Wrong code");
      }
    })
  }


  logout(login2Form: any) {
    login2Form.reset();
    this.userService.logout();
    this.router.navigate(['/stepperLogin'])
  }

  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }

  firstStepDone(stepper:MatStepper):boolean{
    stepper.next()
    return this.completed;
  }

  secondStepDone(stepper:MatStepper):boolean{
    stepper.next()
    return this.secondCompleted;
  }
  
  reset(stepper:MatStepper){
    this.completed = false;
    this.secondCompleted = false;
    stepper.reset();
  }
}
