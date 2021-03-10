import { Injectable } from '@angular/core';
import { Ingredient, RecipeIngredient, Units } from '../../models/ingredient';

@Injectable({ providedIn: 'root' })
export class IngredientsService {
  getByRecipe(recipeId: number): RecipeIngredient[] {
    return [
      {
        amount: 1,
        ingredientId: 1,
        ingredientName: 'Морковка',
        recipeId: recipeId,
        unit: Units.kg
      },
      {
        amount: 20,
        ingredientId: 2,
        ingredientName: 'Картофель',
        recipeId: recipeId,
        unit: Units.kg
      },
      {
        amount: 5.5,
        ingredientId: 3,
        ingredientName: 'Сгущёнка',
        recipeId: recipeId,
        unit: Units.gr
      },
      {
        amount: 8,
        ingredientId: 4,
        ingredientName: 'Ананас вяленый с собственном соку',
        recipeId: recipeId,
        unit: Units.items
      }
    ];
  }

  getByMeal(mealId: number): RecipeIngredient[] {
    return this.getByRecipe(mealId); // DO something more logical
  }

  getIngredients(): Ingredient[] {
    return [
      {
        id: 1,
        name: 'Морковка',
        unit: Units.kg,
        price: 12,
        packPrice: 12,
        packAmount: 1
      },
      {
        id: 2,
        name: 'Картофель',
        unit: Units.kg,
        price: 990,
        packPrice: 27,
        packAmount: 1
      },
      {
        id: 3,
        name: 'Творог',
        unit: Units.gr,
        price: 570,
        packPrice: 70,
        packAmount: 250
      }
    ];
  }

  getById(id: number): Promise<Ingredient> {
    const ingredients = this.getIngredients();
    const result = ingredients.find(value => value.id === id);
    return Promise.resolve(result);
  }
}
