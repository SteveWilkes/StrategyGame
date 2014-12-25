﻿module AgileObjects.StrategyGame.Game.Teams {
    import Pieces = StrategyGame.Game.Pieces;
    import Players = StrategyGame.Game.Players;
    import Ts = TypeScript;

    export interface ITeamFactory {
        createTeam(player: Players.IPlayer, boardTypeId: string, teamNumber: number, events: EventSet): Teams.Team;
    }

    export var teamFactory = "$teamFactory";

    export class TeamFactory implements ITeamFactory {
        constructor(private _$pieceFactory: Pieces.IPieceFactory) { }

        public createTeam(owner: ITeamOwner, boardTypeId: string, teamNumber: number, events: EventSet): Teams.Team {
            var piecesByLocation = this._getPiecesByLocation(teamNumber, events);

            var team = new Teams.Team(owner.id + " Team", piecesByLocation);

            return team;
        }

        private _getPiecesByLocation(teamNumber: number, events: EventSet): TypeScript.Dictionary<TypeScript.Coordinates, Pieces.Piece> {
            var configData = this._getPieceLocationConfigData();
            var piecesByLocation = new TypeScript.Dictionary<TypeScript.Coordinates, Pieces.Piece>();

            for (var i = 0; i < configData.length; i++) {
                var data = configData[i];
                var pieceLocation = Ts.coordinatesRegistry.get(data.row, data.column);
                var piece = this._$pieceFactory.createPiece(teamNumber, data.pieceDefinitionId, events);
                piecesByLocation.add(pieceLocation, piece);
            }

            return piecesByLocation;
        }

        private _getPieceLocationConfigData(): Array<Pieces.PieceLocationConfigData> {
            // TODO: Retrieve specific to BoardType:
            return [
                { row: 1, column: 5, pieceDefinitionId: "1" }, // bomb
                { row: 2, column: 4, pieceDefinitionId: "2" }, // row 2
                { row: 2, column: 5, pieceDefinitionId: "2" },
                { row: 2, column: 6, pieceDefinitionId: "2" },
                { row: 3, column: 3, pieceDefinitionId: "2" }, // row 3
                { row: 3, column: 4, pieceDefinitionId: "2" },
                { row: 3, column: 5, pieceDefinitionId: "2" },
                { row: 3, column: 6, pieceDefinitionId: "2" },
                { row: 3, column: 7, pieceDefinitionId: "2" }];
        }
    }

    angular
        .module(strategyGameApp)
        .service(teamFactory, [Pieces.pieceFactory, TeamFactory]);
}
