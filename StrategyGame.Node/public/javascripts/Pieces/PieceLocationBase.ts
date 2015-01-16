﻿module AgileObjects.StrategyGame.Game.Pieces {

    export class PieceLocationBase implements IPieceLocation {
        private _potentialInteractions: Array<IPieceInteraction>;
        private _isSelected: boolean;

        constructor(private _events: GameEventSet) {
            this._potentialInteractions = new Array<IPieceInteraction>();
        }

        public coordinates: TypeScript.Coordinates;
        public piece: Piece;
        public wasPartOfLastMove: boolean;

        public isOccupied(): boolean {
            return this.piece !== undefined;
        }

        public isSelected(newValue?: boolean): boolean {
            if (newValue !== undefined) { this._isSelected = newValue; }
            return this._isSelected;
        }

        public add(piece: Piece): void {
            throw new Error("Abstract PieceLocationBase.add method not implemented");
        }

        public contains(location: IPieceLocation): boolean {
            if (location === this) { return true; }
            return this.isOccupied() && this.piece.contains(location);
        }

        public movePieceThrough(path: Array<IPieceLocation>): void {
            var piece = this.piece;
            this.piece = undefined;

            var destination = path[path.length - 1];
            destination.add(piece);
        }

        public potentialInteractions(interactions?: Array<IPieceInteraction>): Array<IPieceInteraction> {
            if (interactions !== undefined) {
                this._potentialInteractions = interactions;
            }
            return this._potentialInteractions;
        }
    }
} 