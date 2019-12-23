import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Registrasi, UserData, Update } from '../models/User';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class SistempenggunaService {
  private apiURL = 'https://umn-pti2019.herokuapp.com';
  public user: Registrasi;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  registrasi(registrasi: Registrasi) {
    return this.http.post(`${this.apiURL}/api/register`, registrasi);
  }

  login(user_name: string, password: string, remember_me: boolean) {
    console.log(user_name, password, remember_me);
    return this.http.post<{ token: string }>(`${this.apiURL}/api/login`, { user_name, password, remember_me }).pipe(tap(res => {
      localStorage.setItem('access_token', res.token);
      console.log(this.jwtHelper.isTokenExpired());
      console.log(this.jwtHelper.getTokenExpirationDate());
    }));
  }

  verifikasi(token: string) {
    return this.http.post<UserData>(`${this.apiURL}/api/verify`, { token });
  }

  logout() {
    localStorage.removeItem('access_token');
    window.alert('Logged out!');
  }

  update(update: Update) {
      return this.http.put(`${this.apiURL}/api/update`, update);
  }

}
