﻿module AgileObjects.StrategyGame.Game {

    export interface IPieceFactory {
        createPiece(pieceDefinitionId: string): IPiece;
    }

    export var pieceFactory = "$pieceFactory";

    class PieceFactory implements IPieceFactory {
        private _definitions: AgileObjects.TypeScript.IStringDictionary<PieceDefinition>;
        private _nextPieceId: number;

        constructor() {
            this._definitions = {
                "1": new PieceDefinition(
                    "1",
                    "Bomb",
                    "/Content/Pieces/Bomb.png",
                    new AnyDirectionMovementProfile(1, [new OnlyValidLocationsPieceMovementFilter(), new OnlyOccupiedLocationsPieceMovementFilter()])),
                "2": new PieceDefinition(
                    "2",
                    "Example",
                    "/Content/Pieces/Example.png",
                    new AnyDirectionMovementProfile(1, [new OnlyValidLocationsPieceMovementFilter(), new OnlyEmptyLocationsPieceMovementFilter()]))
            };
            this._nextPieceId = 1;
        }

        public createPiece(definitionId: string): Piece {
            var pieceId = this._nextPieceId++;
            return this._definitions[definitionId].createPiece("piece-" + pieceId);
        }
    }

    angular
        .module(strategyGameApp)
        .service(pieceFactory, PieceFactory);
}