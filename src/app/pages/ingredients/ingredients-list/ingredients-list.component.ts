import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientsService } from '../ingredients.service';
import { Ingredient } from '../../../models/ingredient';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {
  error: any;
  public data: Ingredient[];
  public filterQuery = '';

  constructor(private ingredientsService: IngredientsService,
              private router: Router) {
    this.data = ingredientsService.getIngredients();
  }

  ngOnInit(): void {
  }

  public toInt(num: string) {
    return +num;
  }

  onItemClicked(id: number) {
    this.router.navigate(['/ingredients/edit', id]);
  }
}
