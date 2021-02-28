import { MealIngredient } from './ingredient';

export class Meal {
  id: number;
  portions: number;
  laborCosts: number;
  cookingTime: number;
  cost: number;
  recipeId: number;
  recipeName: string;
  ingredients: MealIngredient[];
}
