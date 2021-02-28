import { EventFull, EventShort } from '../../models/event';
import { Injectable } from '@angular/core';
import { MealService } from './meal.service';

@Injectable({ providedIn: 'root' })
export class EventsService {


  constructor(private mealService: MealService) {
  }

  public getEvents(): EventShort[] {
    const meals = this.mealService.getMealsByEventId(1);
    return [
      {
        id: 1,
        name: 'Завтрак',
        date: new Date(2021, 1, 12),
        meals: meals
      },
      {
        id: 2,
        name: 'Обед',
        date: new Date(2021, 1, 12),
        meals: meals
      },
      {
        id: 3,
        name: 'Ужин',
        date: new Date(2021, 1, 12),
        meals: meals
      },
      {
        id: 4,
        name: 'Ночной перекус',
        date: new Date(2021, 1, 12),
        meals: meals
      }
    ]
      ;
  }

  public getById(id: number): EventFull {
    const events = this.getEvents();
    return events.find(value => value.id === id);
  }

  public save(event: EventFull) {
    // TODO: save this event
  }
}
