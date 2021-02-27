import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventFull } from '../../../models/event';
import { EventsService } from '../events.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
  providers: [DatePipe]
})
export class EventEditComponent implements OnInit {
  event: EventFull;
  eventForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService,
              private datepipe: DatePipe,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.event = this.eventsService.getById(id);

    this.eventForm = new FormGroup({
      'name': new FormControl(this.event.name),
      'date': new FormControl(this.datepipe.transform(this.event.date, 'yyyy-MM-dd'))
    });
  }

  onSaveEvent() {
    this.eventsService.save(this.eventForm.value);
    this.router.navigate(['events']);
  }

  onCancel() {
    this.eventForm.reset(this.optimize(this.event));
  }

  optimize(event: EventFull): any {
    return {
      id: event.id,
      name: event.name,
      date: this.datepipe.transform(event.date, 'yyyy-MM-dd')
    };
  }
}
