import { Injectable } from '@angular/core';
import { UserAccount } from '../../models/user-account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentService } from '../../common/services/EnvironmentService';

@Injectable({ providedIn: 'root' })

export class LoginService {
  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient,
              private environment: EnvironmentService) {
    this.apiUrl = environment.getValue('apiUrl') + '/user/';
  }

  getUserByToken(token: string): Promise<UserAccount> {
    const url = `${this.apiUrl}me`;
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    };
    return this.httpClient.get<UserAccount>(url, header)
      .toPromise()
      .then(user => {
        if (user) {
          return user;
        }
        return null;
      }).catch(error => {
        console.error(error);
        return null;
      });
  }

  sendEmailWithToken(email: string, url: string): Promise<any> {
    return this.httpClient.post('http://localhost:5555/user/login-or-register',
      {
        email: email,
        url: url
      }).toPromise();
  }


}
