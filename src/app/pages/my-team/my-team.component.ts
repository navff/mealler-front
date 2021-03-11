import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../../common-services/EnvironmentService';
import { Team } from '../../models/team';
import { TeamService } from './team.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {
  myTeam: Team;
  myTeams: Team[];
  teamNameForm: FormGroup;
  addMemberForm: FormGroup;

  constructor(private environmentService: EnvironmentService,
              private teamService: TeamService) {

    this.teamNameForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });

    this.addMemberForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });

    teamService.getMyTeams()
      .then((teams) => {
        this.myTeams = teams;
      })
      .catch((err) => console.error(err));

    const ACTIVE_TEAM_ID = 1; // TODO: get it from local storage

    teamService.getTeam(ACTIVE_TEAM_ID)
      .then((team) => {
        console.log('TEAM: ', team.name);
        this.myTeam = team;

        this.teamNameForm.setValue({
          name: team.name
        });
      })
      .catch((err) => console.error(err));
  }

  ngOnInit(): void {
    this.environmentService.setTitle('titles.my-team-page');
  }

  onRemoveMember(id: number) {
    console.log('Member removed');
  }

  onSaveName() {
    console.log('SAVED_NAME: ', this.teamNameForm.value.name);
    this.teamNameForm.markAsPristine();
  }

  onAddMember() {
    console.log('ADDED_MEMBER:', this.addMemberForm.value.email);
    this.addMemberForm.reset();
    this.addMemberForm.markAsPristine();
  }

  onActivateTeam(team: Team) {
    console.log('TEAM_ACTIVATED: ', team);
    // TODO: set active team on server and Deactivate old team
  }
}
