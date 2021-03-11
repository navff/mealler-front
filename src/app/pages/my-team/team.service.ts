import { Injectable } from '@angular/core';
import { Team } from '../../models/team';

@Injectable({ providedIn: 'root' })
export class TeamService {

  getTeam(id: number): Promise<Team> {
    const result: Team = {
      id: 1,
      name: 'Команда Ведафеста',
      isActive: true,
      users: [
        {
          id: 1,
          email: 'user1@33duraka.ru',
          name: 'Пётр Петрович Петровский'
        },
        {
          id: 2,
          email: 'user2@33duraka-v-gorode.ru',
          name: 'Константин Константинович Константинопольский'
        },
        {
          id: 3,
          email: 'user3@33duraka-na-sele.ru',
          name: 'Валерий Валерьевич Валерьевский'
        },
        {
          id: 4,
          email: 'user1@33duraka-bez-odnoro.ru',
          name: 'Зыклымбек Момыш-Улы Тактандиевич'
        }
      ]
    };
    return Promise.resolve(result);
  }

  getMyTeams(): Promise<Team[]> {
    const result: Team[] = [
      {
        id: 1,
        name: 'Команда Ведафеста',
        isActive: true,
        users: [
          {
            id: 1,
            email: 'user1@33duraka.ru',
            name: 'Пётр Петрович Петровский'
          },
          {
            id: 2,
            email: 'user2@33duraka-v-gorode.ru',
            name: 'Константин Константинович Константинопольский'
          },
          {
            id: 3,
            email: 'user3@33duraka-na-sele.ru',
            name: 'Валерий Валерьевич Валерьевский'
          },
          {
            id: 4,
            email: 'user1@33duraka-bez-odnoro.ru',
            name: 'Зыклымбек Момыш-Улы Тактандиевич'
          }
        ]
      },
      {
        id: 2,
        name: 'Пища жизни',
        isActive: false,
        users: [
          {
            id: 1,
            email: 'user1@33duraka.ru',
            name: 'Пётр Петрович Петровский'
          },
          {
            id: 2,
            email: 'user2@33duraka-v-gorode.ru',
            name: 'Константин Константинович Константинопольский'
          }
        ]
      }
    ];

    return Promise.resolve(result);
  }

}
