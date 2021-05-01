import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from './../environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

import {User} from './User';
import {RegisterUser} from './RegisterUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private http: HttpClient) { }

  public getToken(): string { // retrieves token from local storage
    return localStorage.getItem('access_token');
  }

  public readToken(): any{ 
    const token = localStorage.getItem('access_token');
    return helper.decodeToken(token);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');

    // Note: We can also use helper.isTokenExpired(token) 
    // to see if the token is expired

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  login(user: User): Observable<any> {
    // Attempt to login
    return this.http.post<any>(`${environment.userAPIBase}/login`, user);
  }
  // removes token from local storage
  logout(){
    localStorage.removeItem('access_token')
  }

  register(registerUser: RegisterUser): Observable<any> {
    // Attempt to login
    return this.http.post<any>(`${environment.userAPIBase}/register`, registerUser);
  }
}