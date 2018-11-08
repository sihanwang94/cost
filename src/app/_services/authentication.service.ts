import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }

  login(username: string, password: string) {

  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
