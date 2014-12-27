﻿module AgileObjects.StrategyGame.Game.Teams {
    import Pieces = StrategyGame.Game.Pieces;

    export class Team implements Pieces.IPieceOwner {
        constructor(
            public name: string,
            public piecesByInitialLocation: TypeScript.Dictionary<TypeScript.Coordinates, Pieces.Piece>) {

            this.pieces = this.piecesByInitialLocation.values;

            for (var i = 0; i < this.pieces.length; i++) {
                this.pieces[i].team = this;
            }
        }

        public owner: ITeamOwner;
        public pieces: Array<Pieces.Piece>;

        public setNumber(teamNumber: number): void {
            for (var i = 0; i < this.pieces.length; i++) {
                this.pieces[i].setTeamNumber(teamNumber);
            }
        }

        public owns(piece: Pieces.Piece): boolean {
            return this.pieces.indexOf(piece) > -1;
        }

        public pieceTaken(takenPiece: Pieces.Piece): void {
            this.pieces.splice(this.pieces.indexOf(takenPiece), 1);
        }
    }
} 