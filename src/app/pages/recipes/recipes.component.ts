import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../../common/services/EnvironmentService';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(private environmentService: EnvironmentService) {
  }

  ngOnInit(): void {
    this.environmentService.setTitle('titles.recipes-page');
  }

}
