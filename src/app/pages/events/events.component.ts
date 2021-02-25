import { Component, OnInit } from '@angular/core';
import { EventShort } from '../../models/event';
import { EventsService } from './events.service';
import { EnvironmentService } from '../../common-services/EnvironmentService';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventsService: EventsService,
              private environmentService: EnvironmentService) {
  }

  events: EventShort[] = this.eventsService.getEvents();

  ngOnInit(): void {
    this.environmentService.setTitle('titles.events-page');
  }

}
