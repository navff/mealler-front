import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientsService } from '../ingredients.service';
import { ReferenceIngredient } from '../../../models/referenceIngredient';
import { PageView } from '../../../common/PageView';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {
  error: any;
  public data: PageView<ReferenceIngredient>;
  public filterQuery = '';
  public page = 1;

  constructor(private ingredientsService: IngredientsService,
              private router: Router) {
    this.loadData();
  }

  loadData() {
    this.ingredientsService.getIngredients(this.filterQuery, this.page).then(
      (ingredientsPageResult: PageView<ReferenceIngredient>) => {
        console.log('ingredients: ', ingredientsPageResult.items);
        this.data = ingredientsPageResult;
      }
    );
  }

  ngOnInit(): void {
  }

  public toInt(num: string) {
    return +num;
  }

  onItemClicked(id: number) {
    this.router.navigate(['/ingredients/edit', id]);
  }

  onPageChanged(page: number) {
    this.page = page;
    this.loadData();
  }

  onFilterChanged() {
    this.page = 1;
    this.loadData();
  }
}
