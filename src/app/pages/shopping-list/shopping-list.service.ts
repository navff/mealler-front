import { ShoppingList } from '../../models/shopping-list';
import { IngredientsService } from '../ingredients/ingredients.service';
import { Colors, Units } from '../../models/referenceIngredient';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {


  constructor(private ingredientsService: IngredientsService) {
  }

  getShoppingList(): Promise<ShoppingList> {
    const result: ShoppingList = {
      events: [
        {
          id: 1,
          date: new Date(2021, 3, 15),
          meals: [],
          name: 'Завтрак'
        },
        {
          id: 2,
          date: new Date(2021, 3, 15),
          meals: [],
          name: 'Обед'
        },
        {
          id: 3,
          date: new Date(2021, 3, 15),
          meals: [],
          name: 'Ужин'
        }
      ],
      ingredients: [
        {
          id: 1,
          amount: 12,
          cost: 670,
          bought: false,
          name: 'Картофель',
          packAmount: 1,
          packPrice: 24,
          unit: Units.kg,
          color: Colors.white
        },
        {
          id: 2,
          amount: 7,
          cost: 1950,
          bought: true,
          name: 'Морковка',
          packAmount: 1,
          packPrice: 56,
          unit: Units.kg,
          color: Colors.white
        },
        {
          id: 3,
          amount: 3000,
          cost: 1200,
          bought: true,
          name: 'Творог',
          packAmount: 400,
          packPrice: 70,
          unit: Units.gr,
          color: Colors.white
        },
        {
          id: 4,
          amount: 7,
          cost: 350,
          bought: false,
          name: 'Молоко',
          packAmount: 1,
          packPrice: 50,
          unit: Units.l,
          color: Colors.peach
        }
      ],
      totalCost: 5667
    };

    return Promise.resolve(result);
  }
}
