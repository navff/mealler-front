import { EventShort } from '../../models/event';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventsService {
  public getEvents(): EventShort[] {
    return [
      {
        id: 1,
        name: 'Завтрак',
        date: new Date(2021, 1, 12),
        meals: [
          {
            id: 1,
            name: 'Джаганнатха пури чанаки дал',
            portions: 120,
            laborCosts: 4.5,
            cost: 1350
          },
          {
            id: 2,
            name: 'Суп из водоросля',
            portions: 98,
            laborCosts: 2.6,
            cost: 458
          },
          {
            id: 3,
            name: 'Алу патры',
            portions: 225,
            laborCosts: 5.0,
            cost: 1300
          }
        ]
      },
      {
        id: 2,
        name: 'Обед',
        date: new Date(2021, 1, 12),
        meals: [
          {
            id: 1,
            name: 'Пирожок с капустой',
            portions: 120,
            laborCosts: 4.5,
            cost: 1350
          },
          {
            id: 2,
            name: 'Халава вкусная, сладкая',
            portions: 98,
            laborCosts: 2.6,
            cost: 458
          },
          {
            id: 3,
            name: 'Напиток чечевичный',
            portions: 50,
            laborCosts: 5.0,
            cost: 1300
          }
        ]
      },
      {
        id: 3,
        name: 'Ужин',
        date: new Date(2021, 1, 12),
        meals: [
          {
            id: 1,
            name: 'Халава',
            portions: 120,
            laborCosts: 4.5,
            cost: 1350
          },
          {
            id: 2,
            name: 'Цикорий',
            portions: 98,
            laborCosts: 2.6,
            cost: 458
          }
        ]
      },
      {
        id: 4,
        name: 'Ночной перекус',
        date: new Date(2021, 1, 12),
        meals: [
          {
            id: 1,
            name: 'Пирожок с капустой',
            portions: 120,
            laborCosts: 4.5,
            cost: 1350
          },
          {
            id: 3,
            name: 'Напиток чечевичный',
            portions: 50,
            laborCosts: 5.0,
            cost: 1300
          }
        ]
      }
    ];
  }
}
