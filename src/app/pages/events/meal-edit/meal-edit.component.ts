import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../../models/meal';
import { MealService } from '../meal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { RecipesService } from '../../recipes/recipes.service';
import { IRecipe, Recipe } from '../../../models/recipe';

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.scss']
})
export class MealEditComponent implements OnInit {

  meal: Meal;
  mealForm: FormGroup;
  recipesDropdownItems: Array<any>;

  constructor(private route: ActivatedRoute,
              private mealService: MealService,
              private recipesService: RecipesService,
              private location: Location) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.meal = this.mealService.getById(id);
    this.mealForm = new FormGroup({
      'recipe': new FormControl(
        this.convertRecipeToDropdown(this.recipesService.getById(this.meal.recipeId)),
        [Validators.required]),
      'portions': new FormControl(
        this.meal.portions,
        [Validators.required, Validators.min(1)]),
      'cookingTime': new FormControl(
        this.meal.cookingTime,
        [Validators.required, Validators.min(1)]),
      'id': new FormControl(this.meal.id)
    });
    this.setRecipes(id);
  }

  onSaveMeal() {
    this.mealService.save(this.mealForm.value);
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }

  private setRecipes(mealId: number) {
    const recipes = this.recipesService.getRecipes();
    this.recipesDropdownItems = this.convertRecipesToDropdown(recipes);
  }

  private convertRecipesToDropdown(recipes: Recipe[]): Array<any> {
    return recipes.map(value => {
      return {
        label: value.name,
        value: value.id
      };
    });
  }

  private convertRecipeToDropdown(recipe: IRecipe) {
    return {
      label: recipe.name,
      value: recipe.id
    };
  }
}
