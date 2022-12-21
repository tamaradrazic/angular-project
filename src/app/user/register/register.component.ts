import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public username: string | undefined;
  public password: string | undefined;
  public email: string | undefined;
  public firstName: string | undefined;
  public lastName: string | undefined;

  constructor(private userService: UserService, private router: Router){}

  register(registerForm:any){
    this.userService.register(registerForm.value.firstName, 
      registerForm.value.lastName, registerForm.value.username, registerForm.value.password, registerForm.value.email).subscribe(resp => {
        if(resp){
          alert("Uspesna registracija")
          this.router.navigate(['/stepperLogin'])
        }
        else{
          alert("Greska")
          this.router.navigate(['/register'])
        }
      })
  }
}
