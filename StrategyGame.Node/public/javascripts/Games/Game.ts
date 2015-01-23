﻿module AgileObjects.StrategyGame.Games {

    export class Game {
        constructor(
            public id: string,
            public type: Games.GameType,
            public board: Boards.Board,
            public events: GameEventSet) {

            this.players = new Array<Players.IPlayer>();
            this.status = new Status.StatusData(this.events);
        }

        public players: Array<Players.IPlayer>;
        public status: Status.StatusData;

        public add(player: Players.IPlayer): void {
            if (this.players.indexOf(player) === -1) {
                this.players.push(player);

                this.events.playerJoined.publish(player);
            }
        }

        public start() {
            var startingTeam = this.players[0].teams[0];
            this.events.gameStarted.publish(startingTeam);
        }
    }
}