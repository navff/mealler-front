import { MealShort } from './meal';

export class EventShort {
  id: number;
  name: string;
  meals: MealShort[];
  date: Date;
}

export class EventFull {
  id: number;
  name: string;
  meals: MealShort[];
  date: Date;
}
