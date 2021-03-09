import { IdNameEntity } from './abstract/IdNameEntity';

export class Ingredient implements IdNameEntity {
  id: number;
  name: string;
  price?: number;
  unit: Units;
}

export class RecipeIngredient {
  recipeId: number;
  ingredientId: number;
  ingredientName: string;
  amount: number;
  unit: Units;
}

export enum Units {
  kg = 'kg',
  gr = 'gr',
  items = 'items',
  l = 'l'
}
