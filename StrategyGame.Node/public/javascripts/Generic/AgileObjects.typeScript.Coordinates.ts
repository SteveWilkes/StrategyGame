﻿module AgileObjects.TypeScript {

    function getSignature(row: number, column: number): string {
        return row + "x" + column;
    }

    export class Coordinates {
        static EMPTY = new Coordinates(-1, -1, "Empty");

        constructor(public row: number, public column: number, public signature: string = getSignature(row, column)) {
            this.isEvenRow = this.row % 2 === 0;
            this.isEvenColumn = this.column % 2 === 0;
        }

        public isEvenRow: boolean;
        public isEvenColumn: boolean;

        public left(distance: number): Coordinates {
            return new Coordinates(this.row, this.column - distance);
        }

        public upLeft(distance: number): Coordinates {
            return new Coordinates(this.row - distance, this.column - distance);
        }

        public up(distance: number): Coordinates {
            return new Coordinates(this.row - distance, this.column);
        }

        public upRight(distance: number): Coordinates {
            return new Coordinates(this.row - distance, this.column + distance);
        }

        public right(distance: number): Coordinates {
            return new Coordinates(this.row, this.column + distance);
        }

        public downRight(distance: number): Coordinates {
            return new Coordinates(this.row + distance, this.column + distance);
        }

        public down(distance: number): Coordinates {
            return new Coordinates(this.row + distance, this.column);
        }

        public downLeft(distance: number): Coordinates {
            return new Coordinates(this.row + distance, this.column - distance);
        }
    }

    export class CoordinatesRegistry {
        private _coordinates: TypeScript.IStringDictionary<Coordinates>;

        constructor() {
            this._coordinates = {};
        }

        public get(row: number, column: number): Coordinates {
            var signature = getSignature(row, column);
            var coordinates = this._coordinates[signature];
            if (coordinates === undefined) {
                coordinates = this._coordinates[signature] = new Coordinates(row, column, signature);
            }
            return coordinates;
        }
    }

    export var coordinatesRegistry = new CoordinatesRegistry();
}