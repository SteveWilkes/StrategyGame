﻿module AgileObjects.BoardGameEngine.Pieces {
    import Ts = TypeScript;

    export class PieceInteractionProfile {
        constructor(
            private _piece: Piece,
            private _interactionCalculators: Array<PieceInteractionCalculator>,
            private _pieceTakenProcessors: Array<ITakenPieceProcessor>) { }

        public getPotentialInteractions(game: Games.Game): Ts.IStringDictionary<IPieceInteraction> {
            var supportedTypes = game.status.turnManager.regulator.getCurrentlySupportedInteractionTypes(this._piece);
            var allInteractions: Ts.IStringDictionary<IPieceInteraction> = {};
            for (var i = 0; i < this._interactionCalculators.length; i++) {
                var interactionCalculator = this._interactionCalculators[i];
                if (supportedTypes.indexOf(interactionCalculator.type) === -1) { continue; }
                var interactions = interactionCalculator.getPotentialInteractions(this._piece.location, game);
                for (var j = 0; j < interactions.length; j++) {
                    allInteractions[interactions[j].id] = interactions[j];
                }
            }
            return allInteractions;
        }

        public handlePieceTaken(originalPieceLocation: IPieceLocation) {
            for (var i = 0; i < this._pieceTakenProcessors.length; i++) {
                this._pieceTakenProcessors[i].process(this._piece, originalPieceLocation);
            }
        }
    }
}