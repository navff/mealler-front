import { EventShort } from './event';
import { ShoppingListIngredient } from './referenceIngredient';

export class ShoppingList {
  events: EventShort[];
  ingredients: ShoppingListIngredient[];
  totalCost: number;
}
