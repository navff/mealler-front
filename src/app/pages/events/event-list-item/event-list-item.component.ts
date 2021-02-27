import { Component, Input, OnInit } from '@angular/core';
import { EventShort } from '../../../models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {

  constructor(private router: Router) {
  }

  @Input() event: EventShort;

  ngOnInit(): void {
  }

  onItemClick($event: Event, id: number) {
    this.router.navigate(['/events/edit', id]);
  }

  onAddToShoppingListClick(id: number) {
    // TODO: add to shopping list and create a Toast
  }

  onDeleteClicked(id: number) {
    // TODO: delete event with confirmation
  }
}
