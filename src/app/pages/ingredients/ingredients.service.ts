import { Injectable } from '@angular/core';
import { Ingredient, RecipeIngredient } from '../../models/ingredient';

@Injectable({ providedIn: 'root' })
export class IngredientsService {
  getByRecipe(recipeId: number): RecipeIngredient[] {
    return [
      {
        amount: 1,
        ingredientId: 1,
        ingredientName: 'Морковка',
        recipeId: recipeId,
        unit: 'items'
      },
      {
        amount: 20,
        ingredientId: 2,
        ingredientName: 'Картофель',
        recipeId: recipeId,
        unit: 'kg'
      },
      {
        amount: 5.5,
        ingredientId: 3,
        ingredientName: 'Сгущёнка',
        recipeId: recipeId,
        unit: 'gr'
      },
      {
        amount: 8,
        ingredientId: 4,
        ingredientName: 'Ананас вяленый с собственном соку',
        recipeId: recipeId,
        unit: 'items'
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
        unit: 'kg',
        description: ''
      },
      {
        id: 2,
        name: 'Картофель',
        unit: 'kg',
        description: ''
      },
      {
        id: 3,
        name: 'Творог',
        unit: 'gr',
        description: ''
      }
    ];
  }

  getById(id: number): Promise<Ingredient> {
    const ingredients = this.getIngredients();
    const result = ingredients.find(value => value.id === id);
    return Promise.resolve(result);
  }
}
