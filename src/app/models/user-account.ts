export class UserAccount {
  id: number;
  activeTeamId?: number;
  name: string;
  role?: string;
  email: string;
  token?: string;
  teams?: number[];
}
