import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccount } from '../models/user-account';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const account: UserAccount = JSON.parse(localStorage.getItem('my_acccount'));
    if (!account || !account.token) {
      return next.handle(req);
    }
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + account.token)
    });
    return next.handle(authReq);
  }

}
