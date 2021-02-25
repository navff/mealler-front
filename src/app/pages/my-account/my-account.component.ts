import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../../common-services/EnvironmentService';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(private environmentService: EnvironmentService) {
  }

  ngOnInit(): void {
    this.environmentService.setTitle('titles.my-account-page');
  }

}
