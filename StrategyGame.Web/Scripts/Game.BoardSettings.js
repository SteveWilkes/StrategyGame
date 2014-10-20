﻿var AgileObjects;
(function (AgileObjects) {
    (function (StrategyGame) {
        (function (Game) {
            var BoardSettings = (function () {
                function BoardSettings(gridSize, tileBorderWidth) {
                    this.gridSize = gridSize;
                    this.tileBorderWidth = tileBorderWidth;
                    this.tileSizeFactor = (gridSize * 2) - Math.floor(gridSize / 4);
                    this.resize(Game.defaultContainerSize);
                }
                BoardSettings.prototype.resize = function (containerSize) {
                    var resizeFactor = containerSize / Game.defaultContainerSize;
                    this.pieceWidth = Math.floor(Game.defaultPieceWidth * resizeFactor);
                    this.pieceHeight = Math.floor(Game.defaultPieceHeight * resizeFactor);
                };
                return BoardSettings;
            })();
            Game.BoardSettings = BoardSettings;
        })(StrategyGame.Game || (StrategyGame.Game = {}));
        var Game = StrategyGame.Game;
    })(AgileObjects.StrategyGame || (AgileObjects.StrategyGame = {}));
    var StrategyGame = AgileObjects.StrategyGame;
})(AgileObjects || (AgileObjects = {}));
//# sourceMappingURL=C:/Data/VisualStudio/StrategyGame/StrategyGame.Web//Scripts/Game.BoardSettings.js.map
