﻿module AgileObjects.StrategyGame.Game {
    import Boards = StrategyGame.Game.Boards;

    class GameController {
        constructor($gameFactory: IGameFactory, $scope: IGameScope) {
            $scope.game = $gameFactory.createNewGame(Boards.boardTypeRegistry.diamond);
        }
    }

    angular
        .module(strategyGameApp)
        .controller("GameController", [gameFactory, "$scope", GameController]);
}