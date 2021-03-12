import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token: string;

  constructor(private route: ActivatedRoute,
              private loginService: LoginService,
              private router: Router,
              private toastr: ToastrService) {
    this.token = route.snapshot.params['token'];
  }

  ngOnInit(): void {
    if (this.token) {
      this.loginService.getUserByToken(this.token)
        .then(userAccount => {
          localStorage.setItem('my_acccount', JSON.stringify(userAccount));
          if (!userAccount.name) {
            console.log(userAccount.name);
            this.router.navigate(['/my-account']);
            return;
          }
          // const user = JSON.parse(localStorage.getItem("my_acccount"));
          this.router.navigate(['/']);
        })
        .catch(reason => {
          console.error(reason);
          this.toastr.error(reason);
        });
    }
  }

}
