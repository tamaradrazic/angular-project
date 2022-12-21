import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private url: string | undefined;

  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:8080';
  }
}
