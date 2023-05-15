import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public registryUser(newUser: User) {
    let params ={ username: newUser.firstname+" "+newUser.lastname, email: newUser.email, password: newUser.password };
    return this.http.post<any>(
      environment.URL_API + "/auth/local/register",
      params
    );
  }

}
