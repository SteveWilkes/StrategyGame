﻿module AgileObjects.StrategyGame.Game.Boards {

    export class BoardType {
        constructor(
            private _availablePositions: Array<BoardPosition>,
            private _rowConfigs: Array<BoardRowConfig>,
            public orientationTranslator: BoardOrientationTranslator) {

            this.gridSize = this._rowConfigs.length;

            for (var i = 0; i < this._availablePositions.length; i++) {
                this._availablePositions[i].setGridSize(this.gridSize);
                if (this._availablePositions[i].isFocusPosition) {
                    this.orientationTranslator.setFocusPosition(this._availablePositions[i]);
                }
            }
        }

        public gridSize: number;

        public createRows(): Array<Array<BoardTile>> {
            var rows = new Array<Array<BoardTile>>();
            for (var rowNumber = this._rowConfigs.length; rowNumber > 0; rowNumber--) {
                rows.push(this._rowConfigs[rowNumber - 1].createRow(rowNumber));
            }
            return rows;
        }

        public getNextBoardPosition(teamIndex: number, totalNumberOfTeams: number): BoardPosition {
            var positionIndex = teamIndex * (this._availablePositions.length / totalNumberOfTeams);

            return this._availablePositions[positionIndex];
        }
    }
}