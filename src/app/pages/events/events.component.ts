import { Component, OnInit } from '@angular/core';
import { EventShort } from '../../models/event';
import { EventsService } from './events.service';
import { EnvironmentService } from '../../common/services/EnvironmentService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventsService: EventsService,
              private environmentService: EnvironmentService,
              private router: Router) {
  }

  events: EventShort[] = this.eventsService.getEvents();

  ngOnInit(): void {
    this.environmentService.setTitle('titles.events-page');
  }

  onAddEventClick() {
    this.router.navigate(['/events/edit']);
  }
}
