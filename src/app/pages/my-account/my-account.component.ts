import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../../common/services/EnvironmentService';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAccount } from '../../models/user-account';
import { Location } from '@angular/common';
import { AccountsService } from './accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  accountForm: FormGroup;
  account: UserAccount;

  constructor(private environmentService: EnvironmentService,
              private location: Location,
              private accountsService: AccountsService,
              private router: Router) {

    this.account = new UserAccount();
    accountsService.getByToken('ABRAKADABRA')
      .then(account => {
        this.account = account;
      })
      .catch(err => console.error(err));

    this.accountForm = new FormGroup({
      name: new FormControl(this.account.name, [Validators.required]),
      email: new FormControl(this.account.email, [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.environmentService.setTitle('titles.my-account-page');
  }

  onCancel() {
    this.accountForm.reset(this.account);
    this.router.navigate(['/']);
  }

  onSave() {
    console.log(this.accountForm.value);
    this.accountForm.markAsPristine();
  }
}
