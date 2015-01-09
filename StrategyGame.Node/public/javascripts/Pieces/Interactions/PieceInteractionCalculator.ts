﻿module AgileObjects.StrategyGame.Game.Pieces {

    export class PieceInteractionCalculator {
        constructor(
            public type: InteractionType,
            private _locationCalculators: Array<RelatedLocationCalculator>,
            private _interaction: IPieceInteractionConstructor,
            private _events: GameEventSet) { }

        public setLocations(allLocations: IPieceLocationDictionary): void {
            for (var i = 0; i < this._locationCalculators.length; i++) {
                this._locationCalculators[i].setLocations(allLocations);
            }
        }

        public getPotentialInteractions(startingLocation: IPieceLocation): Array<IPieceInteraction> {
            var interactions = new Array<IPieceInteraction>();
            for (var i = 0; i < this._locationCalculators.length; i++) {
                var interactionPaths = this._locationCalculators[i].calculateLocationPaths(startingLocation);
                for (var j = 0; j < interactionPaths.length; j++) {
                    var interactionPath = interactionPaths[j];
                    for (var k = 1; k <= interactionPath.length; k++) {
                        var pathSegment = interactionPath.slice(0, k);
                        var interaction = new this._interaction(pathSegment, this._events);
                        interactions.push(interaction);
                    }
                }
            }
            return interactions;
        }
    }
}