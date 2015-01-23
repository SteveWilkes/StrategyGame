﻿module AgileObjects.StrategyGame.Games {

    export class GameService {
        constructor(
            private _idGenerator: Angular.Services.IIdGenerator,
            private _gameFactory: GameFactory,
            private _teamFactory: Teams.ITeamFactory) { }

        public startDefaultGame(gameTypeId: string): Game {
            var gameId = this._idGenerator.generate();
            var game = this._gameFactory.createNewGame(gameId, gameTypeId);

            // TODO: Get default game setup from game.type
            var player1 = new Players.LocalHumanPlayer("Human");
            game.add(player1);

            var player2 = new Players.RemotePlayerProxy("CPU", game);
            game.add(player2);

            var team1 = this._teamFactory.createTeam(player1, game.type.id);
            game.board.add(team1);

            var team2 = this._teamFactory.createTeam(player2, game.type.id);
            game.board.add(team2);

            game.start();

            return game;
        }
    }
}