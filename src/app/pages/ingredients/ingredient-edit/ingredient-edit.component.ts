import { Component, OnInit } from '@angular/core';
import { ReferenceIngredient, Units } from '../../../models/referenceIngredient';
import { IngredientsService } from '../ingredients.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.scss']
})
export class IngredientEditComponent implements OnInit {
  ingredient: ReferenceIngredient;
  ingredientForm: FormGroup;
  units = Object.keys(Units);

  constructor(private ingredientsService: IngredientsService,
              private route: ActivatedRoute,
              private location: Location,
              private toastr: ToastrService,
              private translateService: TranslateService) {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id !== 0) {
      this.getIngredientFromServer(id);
    } else {
      this.ingredient = ReferenceIngredient.CreateEmpty();
      this.createForm();
    }
  }


  ngOnInit(): void {
  }

  onCancel() {
    this.location.back();
  }

  onSaveIngredient() {
    this.ingredientForm.get('price').setValue(this.getOneItemPrice());
    const id = this.ingredient.id;
    this.ingredient = this.ingredientForm.value;
    this.ingredient.id = id;
    this.ingredientsService.saveIngredient(this.ingredient)
      .then(() => {
        this.ingredientForm.reset(this.ingredient);
        this.toastr.info(this.translateService.instant('common.saved'));
      })
      .catch((error: HttpErrorResponse) => {
        this.toastr.error(error.message);
      });
  }

  getOneItemPrice() {
    const price = this.ingredientForm.value.packPrice;
    const amount = this.ingredientForm.value.packAmount;
    return (price / amount).toFixed(2);
  }

  onUnitChange() {
    this.ingredient.unit = this.ingredientForm.value.unit;
  }

  private getIngredientFromServer(id: number) {
    this.ingredientsService.getById(id).then(ingredient => {
      this.ingredient = ingredient;
      this.createForm();
    });
  }

  private createForm() {
    this.ingredientForm = new FormGroup({
      name: new FormControl(this.ingredient.name, [Validators.required]),
      price: new FormControl(this.ingredient.price, [Validators.required]),
      unit: new FormControl(this.ingredient.unit, [Validators.required]),
      packPrice: new FormControl(this.ingredient.packPrice, [Validators.required, Validators.min(0.01)]),
      packAmount: new FormControl(this.ingredient.packAmount, [Validators.required, Validators.min(0.01)])
    });
  }
}
