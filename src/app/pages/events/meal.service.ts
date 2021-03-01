import { Injectable } from '@angular/core';
import { Meal } from '../../models/meal';
import { IngredientsService } from '../ingredients/ingredients.service';

@Injectable({ providedIn: 'root' })
export class MealService {


  constructor(private ingredientsService: IngredientsService) {
  }

  getById(id: number) {
    const meals = this.getMealsByEventId(1);
    return meals.find(value => value.id === id);
  }

  getMealsByEventId(eventId: number): Meal[] {
    const ingredients = this.ingredientsService.getByMeal(1);
    return [
      {
        id: 1,
        recipeName: 'Джаганнатха пури чанаки дал',
        recipeId: 1,
        portions: 120,
        laborCosts: 1.5,
        cookingTime: 4.5,
        cost: 1350,
        ingredients: ingredients
      },
      {
        id: 2,
        recipeId: 2,
        recipeName: 'Суп из водоросля',
        portions: 98,
        laborCosts: 1.6,
        cookingTime: 2.6,
        cost: 458,
        ingredients: ingredients
      },
      {
        id: 3,
        recipeId: 3,
        recipeName: 'Алу патры',
        portions: 225,
        laborCosts: 1.2,
        cookingTime: 3.2,
        cost: 1300,
        ingredients: ingredients
      },
      {
        id: 4,
        recipeId: 4,
        recipeName: 'Пирожок с капустой',
        portions: 120,
        laborCosts: 3.0,
        cookingTime: 4.0,
        cost: 1350,
        ingredients: ingredients
      },
      {
        id: 5,
        recipeId: 5,
        recipeName: 'Халава вкусная, сладкая',
        portions: 98,
        laborCosts: 1.5,
        cookingTime: 1.5,
        cost: 458,
        ingredients: ingredients
      },
      {
        id: 6,
        recipeId: 6,
        recipeName: 'Напиток чечевичный',
        portions: 50,
        laborCosts: 0.5,
        cookingTime: 1.5,
        cost: 1300,
        ingredients: ingredients
      },
      {
        id: 7,
        recipeId: 7,
        recipeName: 'Халава',
        portions: 120,
        laborCosts: 4.5,
        cookingTime: 4.5,
        cost: 1350,
        ingredients: ingredients
      },
      {
        id: 8,
        recipeId: 8,
        recipeName: 'Цикорий',
        portions: 98,
        laborCosts: 0.6,
        cookingTime: 2.6,
        cost: 458,
        ingredients: ingredients
      }
    ];
  }

  save(meal: Meal) {
    console.log('MEAL SAVED: ', meal);
  }
}
