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
  ValidatorFn,
  Validators
} from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { RecipeIngredient, Units } from '../../../models/ingredient';
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
      'name': new FormControl(this.recipe.name, [Validators.required]),
      'portions': new FormControl(this.recipe.portions, [Validators.required, Validators.min(1)]),
      'laborCosts': new FormControl(this.recipe.laborCosts, [Validators.required, Validators.min(1)]),
      'cookingTime': new FormControl(this.recipe.cookingTime, [Validators.required, Validators.min(1)]),
      'description': new FormControl(this.recipe.description),
      'ingredients': this.createIngredientsFormControls()
    });

    const ingredientsDict = this.ingredientsService.getIngredients();
    this.ingredientsDropdownItems = this.convertIngredientsToDropdown(ingredientsDict);
  }

  onSaveRecipe() {
    console.log('RECIPE: ', this.recipeForm.value);
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }

  onRemoveIngredient(ingredientCtrl: IngredientFormGroup, index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    this.recipeForm.markAsDirty();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new IngredientFormGroup({
          'ingredient': new FormControl('', [Validators.required]),
          'ingredientAmount': new FormControl('', [Validators.required, Validators.min(1)])
        }, null, null,
        {
          recipeId: this.recipe.id,
          ingredientId: 0,
          ingredientName: '',
          amount: 0,
          unit: Units.kg
        }));
    this.recipeForm.markAsDirty();
  }

  onChangeAmount(event, ingredient: RecipeIngredient) {
    const value = event.target.value;
    ingredient.amount = value;
  }

  onChangeIngredient(event, ingredientFormGroup: IngredientFormGroup) {
    if (!event) {
      return;
    }
    const ingredientId = event.value;
    this.ingredientsService.getById(ingredientId).then(ingredient => {
      ingredientFormGroup.ingredient = {
        amount: ingredientFormGroup.ingredient.amount,
        ingredientId: ingredient.id,
        ingredientName: ingredient.name,
        recipeId: ingredientFormGroup.ingredient.recipeId,
        unit: ingredient.unit
      };
    });
  }

  private createIngredientsFormControls(): FormArray {
    const formGroups = [];
    for (const ingredient of this.recipe.ingredients) {
      const formGroup = new IngredientFormGroup({
        'ingredient': new FormControl(
          { label: ingredient.ingredientName, value: ingredient.ingredientId },
          [Validators.required]
        ),
        'ingredientAmount': new FormControl(
          ingredient.amount,
          [Validators.required, Validators.min(1)]
        )
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
