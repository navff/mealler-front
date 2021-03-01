import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../models/recipe';
import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn
} from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Ingredient, RecipeIngredient } from '../../../models/ingredient';
import { IngredientsService } from '../../ingredients/ingredients.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  recipeForm: FormGroup;
  ingredientsDropdownItems: any[];

  constructor(private route: ActivatedRoute,
              private recipesService: RecipesService,
              private ingredientsService: IngredientsService,
              private location: Location) {
  }

  get ingredientsFromArrayControls(): IngredientFormGroup[] {
    return <IngredientFormGroup[]>(<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipe = this.recipesService.getById(id);

    this.recipeForm = new FormGroup({
      'name': new FormControl(this.recipe.name),
      'portions': new FormControl(this.recipe.portions),
      'laborCosts': new FormControl(this.recipe.laborCosts),
      'cookingTime': new FormControl(this.recipe.cookingTime),
      'ingredients': this.createIngredientsFormControls()
    });

    const ingredientsDict = this.ingredientsService.getIngredients();
    this.ingredientsDropdownItems = this.convertIngredientsToDropdown(ingredientsDict);
  }

  onSaveRecipe() {
    console.log('RECIPE: ', this.recipeForm.value);
  }

  onCancel() {
    this.location.back();
  }

  onRemoveIngredient(ingredientCtrl: IngredientFormGroup, index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    this.recipeForm.markAsDirty();
  }

  // TODO: при выборе ингредиента переустановить единицу измерения

  private createIngredientsFormControls(): FormArray {
    const formGroups = [];
    for (const ingredient of this.recipe.ingredients) {
      const formGroup = new IngredientFormGroup({
        'ingredient': new FormControl({ label: ingredient.ingredientName, value: ingredient.ingredientId }),
        'ingredientAmount': new FormControl(ingredient.amount)
      }, null, null, ingredient);
      formGroups.push(formGroup);
    }
    return new FormArray(formGroups);
  }

  private convertIngredientsToDropdown(ingredients: { id: number, name: string }[]): Array<any> {
    return ingredients.map(value => {
      return {
        label: value.name,
        value: value.id
      };
    });
  }

  private convertIngredientToDropdown(ingredient: Ingredient) {
    return {
      label: ingredient.name,
      value: ingredient.id
    };
  }
}

export class IngredientFormGroup extends FormGroup {
  public ingredient: RecipeIngredient;


  constructor(controls: { [p: string]: AbstractControl },
              validatorOrOpts: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator: AsyncValidatorFn | AsyncValidatorFn[] | null,
              ingredient: RecipeIngredient) {
    super(controls, validatorOrOpts, asyncValidator);
    this.ingredient = ingredient;
  }
}
