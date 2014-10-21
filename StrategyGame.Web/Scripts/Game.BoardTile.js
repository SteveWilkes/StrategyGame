﻿var AgileObjects;
(function (AgileObjects) {
    (function (StrategyGame) {
        (function (Game) {
            var BoardTile = (function () {
                function BoardTile(row, column) {
                    this.row = row;
                    this.column = column;
                    var isEvenRow = row % 2 === 0;
                    var isEvenColumn = column % 2 === 0;
                    this.isDark = (isEvenRow && isEvenColumn) || (!isEvenRow && !isEvenColumn);
                }
                BoardTile.prototype.resize = function (newSize, resizeFactor) {
                    this.size = newSize;

                    if (this.isOccupied()) {
                        this.piece.resize(resizeFactor);
                    }
                };

                BoardTile.prototype.isOccupied = function () {
                    return this.piece !== undefined;
                };

                BoardTile.prototype.assign = function (piece) {
                    console.log("Piece " + piece.id + " assigned");
                    this.piece = piece;
                };
                return BoardTile;
            })();
            Game.BoardTile = BoardTile;
        })(StrategyGame.Game || (StrategyGame.Game = {}));
        var Game = StrategyGame.Game;
    })(AgileObjects.StrategyGame || (AgileObjects.StrategyGame = {}));
    var StrategyGame = AgileObjects.StrategyGame;
})(AgileObjects || (AgileObjects = {}));
//# sourceMappingURL=C:/Data/VisualStudio/StrategyGame/StrategyGame.Web//Scripts/Game.BoardTile.js.map
