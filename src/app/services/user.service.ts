import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { last, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:8080"

  constructor(private httpClient: HttpClient, private router:Router) { }

  login(username:string, password:string):Observable<any>{
    let params = new HttpParams().set('username', username).set('password', password);
    return this.httpClient.post(this.url + "/authenticate", params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        skip: 'true',
      })
    })
  }

  login2(username:string, password:string, code:string):Observable<any>{
    let params = new HttpParams().set('code', code).set('username', username!).set('password', password!);
    return this.httpClient.post(this.url + "/withCode", params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        skip: 'true',
      })
    })
  }

  register(firstName:string, lastName:string, username:string, password:string, email:string):Observable<any>{
    let params = new HttpParams().set('username', username).set('firstName', firstName)
    .set('lastName', lastName).set('email', email).set('password', password);
    return this.httpClient.post(this.url + "/register", params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        skip: 'true',
      })
    })
  }

  logout(){
    localStorage.removeItem("token")
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
