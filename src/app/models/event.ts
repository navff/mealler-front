import { Meal } from './meal';

export class EventShort {
  id: number;
  name: string;
  meals: Meal[];
  date: Date;
}

export class EventFull {
  id: number;
  name: string;
  meals: Meal[];
  date: Date;
}
