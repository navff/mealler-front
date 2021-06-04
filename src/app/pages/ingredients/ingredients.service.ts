import { Injectable } from '@angular/core';
import { RecipeIngredient, ReferenceIngredient, Units } from '../../models/referenceIngredient';
import { EnvironmentService } from '../../common/services/EnvironmentService';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageView } from '../../common/PageView';

@Injectable({ providedIn: 'root' })

export class IngredientsService {
  private apiUrl: string;

  constructor(
    private environment: EnvironmentService,
    private httpClient: HttpClient) {
    this.apiUrl = environment.getValue('apiUrl') + '/ReferenceIngredient/';
  }

  getByRecipe(recipeId: number): RecipeIngredient[] {
    return [
      {
        amount: 1,
        id: 1,
        name: 'Морковка',
        recipeId: recipeId,
        unit: Units.kg
      },
      {
        amount: 20,
        id: 2,
        name: 'Картофель',
        recipeId: recipeId,
        unit: Units.kg
      },
      {
        amount: 5.5,
        id: 3,
        name: 'Сгущёнка',
        recipeId: recipeId,
        unit: Units.gr
      },
      {
        amount: 8,
        id: 4,
        name: 'Ананас вяленый с собственном соку',
        recipeId: recipeId,
        unit: Units.items
      }
    ];
  }

  getByMeal(mealId: number): RecipeIngredient[] {
    return this.getByRecipe(mealId); // DO something more logical
  }

  getIngredients2(): ReferenceIngredient[] {
    return [
      {
        id: 1,
        name: 'Морковка',
        unit: Units.kg,
        price: 12,
        packPrice: 12,
        packAmount: 1
      },
      {
        id: 2,
        name: 'Картофель',
        unit: Units.kg,
        price: 990,
        packPrice: 27,
        packAmount: 1
      },
      {
        id: 3,
        name: 'Творог',
        unit: Units.gr,
        price: 570,
        packPrice: 70,
        packAmount: 250
      }
    ];
  }

  getIngredients(word: string = '', page: number = 1): Promise<PageView<ReferenceIngredient>> {
    const url = this.apiUrl;
    return this.httpClient.get<ReferenceIngredient[]>(url, {
      params: new HttpParams()
        .set('word', word)
        .set('page', page.toString())
    }).toPromise().then(
      value => {
        return value;
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  }

  saveIngredient(ingredient: ReferenceIngredient) {
    if (ingredient.id === 0) {
      return this.createNew(ingredient);
    } else {
      return this.updateExisting(ingredient);
    }
  }

  getById(id: number): Promise<ReferenceIngredient> {
    const url = `${this.apiUrl}${id}`;
    return this.httpClient.get<ReferenceIngredient[]>(url).toPromise().then(
      value => {
        return value;
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  }

  private updateExisting(ingredient: ReferenceIngredient) {
    const url = `${this.apiUrl}${ingredient.id}`;
    return this.httpClient.put(url, ingredient)
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  private createNew(ingredient: ReferenceIngredient) {
    const url = `${this.apiUrl}`;
    return this.httpClient.post(url, ingredient)
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }
}
