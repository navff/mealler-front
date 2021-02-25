import { Component, Input, OnInit } from '@angular/core';
import { EventShort } from '../../../models/event';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {

  constructor() { }

  @Input() event: EventShort;

  ngOnInit(): void {
  }

}
