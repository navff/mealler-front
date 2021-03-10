import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../../common-services/EnvironmentService';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingList } from '../../models/shopping-list';
import { ShoppingListIngredient } from '../../models/ingredient';

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
}
