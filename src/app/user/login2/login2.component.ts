import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component {

  public code = localStorage.getItem('code')
  login2Form: any;
  public secondFormGroup!: FormGroup;

  constructor(private userService: UserService, public router: Router, private formBuilder: FormBuilder){}

  ngOnInit() {
    this.login2Form = new FormGroup({});
    this.secondFormGroup = this.formBuilder.group({
        name: ['', Validators.required]
    });

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
        stepper.next();
      }
      else {
        alert("Wrong code");
      }
    })
  }

  logout() {
    this.userService.logout();
  }

  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }
}
