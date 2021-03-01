import { IdNameEntity } from './abstract/IdNameEntity';

export class Ingredient implements IdNameEntity {
  id: number;
  name: string;
  description: string;
  priceAvg?: number;
  unit: string;
}

export class RecipeIngredient {
  recipeId: number;
  ingredientId: number;
  ingredientName: string;
  amount: number;
  unit: string;
}
