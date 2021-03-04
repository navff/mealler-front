import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../models/ingredient';
import { IngredientsService } from '../ingredients.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.scss']
})
export class IngredientEditComponent implements OnInit {
  ingredient: Ingredient;
  ingredientForm: FormGroup;

  constructor(private ingredientsService: IngredientsService,
              private route: ActivatedRoute,
              private location: Location) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ingredientsService.getById(id).then(ingredient => {
      this.ingredient = ingredient;

      this.ingredientForm = new FormGroup({
        name: new FormControl(this.ingredient.name, [Validators.required]),
        price: new FormControl(this.ingredient.price, [Validators.required]),
        unit: new FormControl(this.ingredient.unit, [Validators.required]),
        calculator: new FormGroup({
          price: new FormControl('0', [Validators.required, Validators.min(0.01)]),
          amount: new FormControl(1)
        })
      });
    });

  }


  ngOnInit(): void {
  }

  onCancel() {
    this.location.back();
  }

  onSaveIngredient() {
    this.ingredientForm.get('price').setValue(this.getOneItemPrice());
    console.log('INGREDIENT: ', this.ingredientForm.value);
  }

  getOneItemPrice() {
    const price = this.ingredientForm.value.calculator.price;
    const amount = this.ingredientForm.value.calculator.amount;
    return (price / amount).toFixed(2);
  }
}
