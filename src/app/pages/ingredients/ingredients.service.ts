import { Injectable } from '@angular/core';
import { RecipeIngredient } from '../../models/ingredient';

@Injectable({ providedIn: 'root' })
export class IngredientsService {
  getByRecipe(recipeId: number): RecipeIngredient[] {
    return [
      {
        count: 1,
        ingredientId: 1,
        ingredientName: 'Морковка',
        recipeId: recipeId
      },
      {
        count: 20,
        ingredientId: 2,
        ingredientName: 'Картофель',
        recipeId: recipeId
      },
      {
        count: 5.5,
        ingredientId: 3,
        ingredientName: 'Сгущёнка',
        recipeId: recipeId
      },
      {
        count: 8,
        ingredientId: 4,
        ingredientName: 'Ананас вяленый с собственном соку',
        recipeId: recipeId
      }
    ];
  }
}
