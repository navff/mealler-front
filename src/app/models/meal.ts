import { RecipeIngredient } from './referenceIngredient';

export class Meal {
  id: number;
  portions: number;
  laborCosts: number;
  cookingTime: number;
  cost: number;
  recipeId: number;
  recipeName: string;
  ingredients: RecipeIngredient[];
}
