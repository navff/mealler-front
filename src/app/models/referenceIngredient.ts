import { IdNameEntity } from './abstract/IdNameEntity';

export class ReferenceIngredient implements IdNameEntity {
  id: number;
  name: string;
  price?: number;
  unit: Units;
  packPrice: number;
  packAmount: number;

  static CreateEmpty(): ReferenceIngredient {
    return {
      id: 0,
      name: '',
      packAmount: 1,
      packPrice: 0,
      price: 0,
      unit: Units.kg
    };
  }
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
