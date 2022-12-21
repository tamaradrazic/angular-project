import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string | undefined;
  public password: string | undefined;
  loginForm: any;
  public firstFormGroup!: FormGroup;
  public valid: boolean | undefined;

  constructor(private userService: UserService, public router: Router, private formBuilder: FormBuilder){}

  ngOnInit() {
    this.loginForm = new FormGroup({});
    this.firstFormGroup = this.formBuilder.group({
        name: ['', Validators.required]
    });

  }

  login(loginForm:any, stepper: MatStepper){
    this.userService.login(loginForm.value.username, 
      loginForm.value.password).subscribe((resp:any) => {
        if(resp != undefined){
          localStorage.setItem('code', resp);
          localStorage.setItem('username', loginForm.value.username);
          localStorage.setItem('password', loginForm.value.password);
          alert("Uspesan prvi korak!");
          this.valid = true;
          stepper.next();
          //this.router.navigate(['/login2'])
        }
        else{
          alert("Wrong username or password");
        }
      })
  }
  
  logout(){
    this.userService.logout();
  }

  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }
}
