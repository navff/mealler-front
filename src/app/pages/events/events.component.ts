import { Component, OnInit } from '@angular/core';
import { EventShort } from '../../models/event';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  events: EventShort[] = this.eventsService.getEvents();

  ngOnInit(): void {
  }

}
