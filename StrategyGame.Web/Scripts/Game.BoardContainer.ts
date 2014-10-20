﻿module AgileObjects.StrategyGame.Game {

    export var defaultContainerSize = 975;

    export class BoardContainer {
        // ReSharper disable InconsistentNaming
        constructor(private _$window: ng.IWindowService) {
            // ReSharper restore InconsistentNaming
        }

        public getSize(): number {
            return Math.min(this._$window.innerWidth, this._$window.innerHeight);
        }
    }
} 