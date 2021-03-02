import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { IngredientsService } from '../ingredients/ingredients.service';

@Injectable({ providedIn: 'root' })
export class RecipesService {


  constructor(private ingredientsService: IngredientsService) {
  }

  getRecipes(): Recipe[] {
    const ingredients = this.ingredientsService.getByRecipe(1);
    return [
      {
        id: 1,
        name: 'Джаганнатха пури чанаки дал',
        laborCosts: 1.5,
        portions: 5,
        ingredients: ingredients,
        cookingTime: 2.5,
        description: ''
      },
      {
        id: 2,
        name: 'Суп из водоросля',
        laborCosts: 3.5,
        portions: 10,
        ingredients: ingredients,
        cookingTime: 4.0,
        description: 'Взять немножечко укропу'
      },
      {
        id: 3,
        name: 'Алу патры',
        laborCosts: 3.3,
        portions: 4,
        ingredients: ingredients,
        cookingTime: 3.5,
        description: ''
      },
      {
        id: 4,
        name: 'Пирожок с капустой',
        laborCosts: 2.2,
        portions: 6,
        ingredients: ingredients,
        cookingTime: 2.5,
        description: 'Сделать пирожки с капустой очень просто'
      },
      {
        id: 5,
        name: 'Халава вкусная, сладкая',
        laborCosts: 1.5,
        portions: 5,
        ingredients: ingredients,
        cookingTime: 2.0,
        description: ''
      },
      {
        id: 6,
        name: 'Напиток чечевичный',
        laborCosts: 3.5,
        portions: 10,
        ingredients: ingredients,
        cookingTime: 4.0,
        description: ''
      },
      {
        id: 7,
        name: 'Халава',
        laborCosts: 3.6,
        portions: 15,
        ingredients: ingredients,
        cookingTime: 3.8,
        description: 'Засыпать манку, сахар и масло и перемешать'
      },
      {
        id: 8,
        name: 'Цикорий',
        laborCosts: 2.5,
        portions: 8,
        ingredients: ingredients,
        cookingTime: 2.8,
        description: ''
      }
    ];
  }

  getById(id: number) {
    const recipes = this.getRecipes();
    return recipes.find(value => value.id === id);
  }
}
