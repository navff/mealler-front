import { Injectable } from '@angular/core';
import { UserAccount } from '../../models/user-account';

@Injectable({ providedIn: 'root' })

export class LoginService {
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
}
