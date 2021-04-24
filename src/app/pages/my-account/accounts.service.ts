import { UserAccount } from '../../models/user-account';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccountsService {
  getByToken(token: string): Promise<UserAccount> {
    const result: UserAccount = {
      id: 9999,
      email: 'test@test.ru',
      name: 'Константин Константинович Константинопольский',
      token: token
    };
    return Promise.resolve(result);
  }
}
