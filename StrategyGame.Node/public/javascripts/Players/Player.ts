﻿module AgileObjects.StrategyGame.Players {
    import Teams = StrategyGame.Teams;

    export class Player implements IPlayer {
        constructor(public id: string, public isHuman: boolean, public isLocal: boolean = false) {
            this.teams = new Array<Teams.Team>();
        }

        public teams: Array<Teams.Team>;

        public getNextTeamId(): string {
            return this.id + "*" + this.teams.length.toString();
        }

        public add(team: Teams.Team): void {
            team.owner = this;
            this.teams.push(team);
        }

        public takeTurn(team: Teams.Team): void { }
    }
}