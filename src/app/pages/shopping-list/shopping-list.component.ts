import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../../common-services/EnvironmentService';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingList } from '../../models/shopping-list';
import { Colors, ShoppingListIngredient } from '../../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppingList: ShoppingList;

  constructor(private environmentService: EnvironmentService,
              private shoppingListService: ShoppingListService) {
    this.shoppingListService.getShoppingList()
      .then(list => this.shoppingList = list)
      .catch(err => console.error(err));
  }

  ngOnInit(): void {
    this.environmentService.setTitle('titles.shopping-list-page');
  }

  onBoughtCheckboxChange($event: Event, id: number, item: ShoppingListIngredient) {
    // TODO: set bought on server and remove 'item' from method params
    item.bought = !item.bought;
  }

  onRemoveIngredient($event: Event, item: ShoppingListIngredient) {
    // TODO: remove from server
    const index = this.shoppingList.ingredients.findIndex(x => x.id === item.id);
    this.shoppingList.ingredients.splice(index, 1);
  }

  onRowClick($event: Event, item: ShoppingListIngredient) {
    console.log('ITEM: ', item);
    let newColor: Colors;
    switch (item.color) {
      case Colors.white:
        newColor = Colors.blue;
        break;
      case Colors.blue:
        newColor = Colors.green;
        break;
      case Colors.green:
        newColor = Colors.peach;
        break;
      case Colors.peach:
        newColor = Colors.yellow;
        break;
      case Colors.yellow:
        newColor = Colors.white;
        break;
    }
    item.color = newColor;
  }
}


