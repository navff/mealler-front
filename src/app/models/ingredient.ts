import { IdNameEntity } from './abstract/IdNameEntity';

export class Ingredient implements IdNameEntity {
  id: number;
  name: string;
  price?: number;
  unit: Units;
  packPrice: number;
  packAmount: number;
}

export class RecipeIngredient {
  recipeId: number;
  id: number;
  name: string;
  amount: number;
  unit: Units;
}

export class ShoppingListIngredient {
  id: number;
  amount: number;
  cost: number;
  bought: boolean;
  packPrice: number;
  packAmount: number;
  name: string;
  unit: Units;
  color: Colors;
}

export enum Units {
  kg = 'kg',
  gr = 'gr',
  items = 'items',
  l = 'l'
}

export enum Colors {
  green = 'green',
  blue = 'blue',
  peach = 'peach',
  yellow = 'yellow',
  white = 'white'
}
