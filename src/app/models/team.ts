export class Team {
  id: number;
  name: string;
  users: TeamUser[];
  isActive: boolean;
}

export class TeamUser {
  id: number;
  name: string;
  email: string;
}
