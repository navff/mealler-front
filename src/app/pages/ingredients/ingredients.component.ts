import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../../common-services/EnvironmentService';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  constructor(private environmentService: EnvironmentService) {
  }

  ngOnInit(): void {
    this.environmentService.setTitle('titles.ingredients-page');
  }

}
