import { EventShort } from './event';
import { ShoppingListIngredient } from './ingredient';

export class ShoppingList {
  events: EventShort[];
  ingredients: ShoppingListIngredient[];
  totalCost: number;
}
