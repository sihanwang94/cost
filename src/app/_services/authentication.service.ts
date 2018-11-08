import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private nodeUrl : string = "";
  constructor(private http : HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${this.nodeUrl}/users/authenticate`, { username: username, password: password })
    .pipe(map(user => {
        // login successful if there's a jwt token in the response; && user.token
        if (user ) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
    }));
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
