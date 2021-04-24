import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token: string;
  form = new FormGroup({
    email: new FormControl('var@33kita.ru', [Validators.email, Validators.required])
  });

  constructor(private route: ActivatedRoute,
              private loginService: LoginService,
              private router: Router,
              private location: Location,
              private toastr: ToastrService) {
    this.token = route.snapshot.params['token'];
  }

  ngOnInit(): void {
    if (this.token) {
      this.loginService.getUserByToken(this.token)
        .then(userAccount => {
          if (userAccount) {
            userAccount.token = this.token;
            localStorage.setItem('my_acccount', JSON.stringify(userAccount));
            if (!userAccount.name) {
              this.router.navigate(['/my-account']);
              return;
            }
            // const user = JSON.parse(localStorage.getItem("my_acccount"));
            this.router.navigate(['/']);
            return;
          } else {
            // TODO: Редирект куда-нибудь и сообщение об ошибке
            console.error('Not authenticated!');
          }
        })
        .catch(reason => {
          console.error(reason);
          this.toastr.error(reason);
        });
    }
  }

  onSendClick() {
    this.loginService.sendEmailWithToken(this.form.value.email, window.location.host)
      .then(data => {
        console.log('RECEIVED_DATA:', data);
        if (true) {
          this.router.navigate(['/login/email-sent']);
        }
      });
  }
}
