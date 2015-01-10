﻿module AgileObjects.StrategyGame.Game.Status {

    export interface IGameCoordinator {
        monitor(game: IGameCoordinationSubject): void;
    }

    export var $gameCoordinator = "$gameCoordinator";

    class GameCoordinator implements IGameCoordinator {
        constructor(private _socket: SocketIO.Socket) { }

        public monitor(game: IGameCoordinationSubject): void {
            game.events.gameStarted.subscribe(() => {
                this._socket.emit("gameStarted", game.id);
                return true;
            });

            game.events.pieceMoved.subscribe(movement => {
                var movementPath = new Array<string>(movement.path.length);
                for (var i = 0; i < movement.path.length; i++) {
                    movementPath[i] = movement.path[i].coordinates.signature;
                }
                this._socket.emit("pieceMoved", movementPath);
                return true;
            });
        }
    }

    angular
        .module(strategyGameApp)
        .service($gameCoordinator, [
            Angular.Services.$socketFactory,
            GameCoordinator]);
}