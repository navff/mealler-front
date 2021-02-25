import { Component, Input, OnInit } from '@angular/core';
import { MealShort } from '../../../models/meal';

@Component({
  selector: 'app-meal-list-item',
  templateUrl: './meal-list-item.component.html',
  styleUrls: ['./meal-list-item.component.scss']
})
export class MealListItemComponent implements OnInit {

  constructor() { }

  @Input() meal: MealShort;


  ngOnInit(): void {
  }

}
