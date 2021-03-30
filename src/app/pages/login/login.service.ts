import { Injectable } from '@angular/core';
import { UserAccount } from '../../models/user-account';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class LoginService {
  constructor(private httpClient: HttpClient) {
  }

  getUserByToken(token: string): Promise<UserAccount> {
    if (token === 'error_token') {
      return Promise.reject('User is not exists');
    }

    const result: UserAccount = {
      token: token,
      name: 'Petya',
      email: 'petya@petr-petru.com'
    };
    return Promise.resolve(result);
  }

  sendEmailWithToken(email: string, url: string): Promise<any> {
    return this.httpClient.post('http://localhost:5555/user/login-or-register',
      {
        email: email,
        url: url
      }).toPromise();
  }


}
