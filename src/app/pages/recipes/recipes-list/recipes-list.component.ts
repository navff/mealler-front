import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  error: any;
  public data: Recipe[];
  public filterQuery = '';

  constructor(private recipeService: RecipesService,
              private router: Router) {
    this.data = recipeService.getRecipes();

    /*
     this.dataTableService.getData().subscribe(
      (data: ITableData) => {
        setTimeout(() => {
          this.data = [...data];
        }, 1000);
      }, // success path
      (error) => (this.error = error) // error path
    );
    * */
  }

  ngOnInit(): void {
  }

  public toInt(num: string) {
    return +num;
  }

  onItemClicked(id: number) {
    this.router.navigate(['/recipes/edit', id]);
  }

}
