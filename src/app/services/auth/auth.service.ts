import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token?: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(environment.URL_API + '/auth/local', { email: username, password: password }, { observe: 'response' });
  }

}
