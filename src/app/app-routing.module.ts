import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardUser } from './guard/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { Login2Component } from './user/login2/login2.component';
import { RegisterComponent } from './user/register/register.component';
import { ProtectedComponent } from './protected-test/protected.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
 // {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "login2", component: Login2Component},
  {path: "protected", component: ProtectedComponent, canActivate:[AuthGuardUser]},
  {path: "stepperLogin", component: StepperComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
