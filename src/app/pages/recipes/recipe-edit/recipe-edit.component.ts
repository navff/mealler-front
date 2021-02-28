import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../models/recipe';
import { FormControl, FormGroup } from '@angular/forms';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipe = this.recipesService.getById(id);

    this.recipeForm = new FormGroup({
      'name': new FormControl(''),
      'portions': new FormControl(''),
      'laborCosts': new FormControl(''),
      'cookingTime': new FormControl('')
    });
  }

  onSaveRecipe() {
  }

  onCancel() {
  }

}
