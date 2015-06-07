﻿var gameBuilder: Ut.IGameBuilderService = require("./GameBuilder");
var Ao: Typings.AgileObjectsNs = require("../../../InternalModules");
var Bge = Ao.BoardGameEngine;
var TsNs = Ao.TypeScript;

describe("Game",() => {
    describe("Pieces",() => {
        describe("InteractionMonitor",() => {
            it("Should highlight a Piece on held mouse down",() => {
                var game = gameBuilder.startGame(gc => gc
                    .withAttackThenMoveTurnInteractions()
                    .withA3x3NorthSouthBoard()
                    .withHumanLocalAndRemotePlayers()
                    .withATeamForPlayer(1, tc => tc
                    .withAPieceAt(["1x1"], pc => pc
                    .withUdlrMovementBy(1))));

                var monitor = setupInteractionMonitor(game);

                var piece = TsNs.Joq.first<Piece>(game.teams[0].getPieces());

                holdMouseDownOn(piece, monitor);

                expect(highlightedPiece(monitor).id).toBe(piece.id);
            });

            it("Should show Potential Interactions for a highlighted Piece",() => {
                var game = gameBuilder.startGame(gc => gc
                    .withAttackThenMoveTurnInteractions()
                    .withA3x3NorthSouthBoard()
                    .withHumanLocalAndRemotePlayers()
                    .withATeamForPlayer(1, tc => tc
                    .withAPieceAt(["1x1"], pc => pc
                    .withUdlrMovementBy(1))));

                var monitor = setupInteractionMonitor(game);

                var boardTiles = game.board.getTiles();
                var piece = boardTiles["1x1"].piece;

                holdMouseDownOn(piece, monitor);

                var moveUpOneTile = boardTiles["2x1"].potentialInteractions();
                expect(moveUpOneTile.length).toBe(1);

                var moveRightOneTile = boardTiles["1x2"].potentialInteractions();
                expect(moveRightOneTile.length).toBe(1);
            });

            it("Should select a Piece on mouse click",() => {
                var game = gameBuilder.startGame(gc => gc
                    .withAttackThenMoveTurnInteractions()
                    .withA3x3NorthSouthBoard()
                    .withHumanLocalAndRemotePlayers()
                    .withATeamForPlayer(1, tc => tc
                    .withAPieceAt(["1x1"], pc => pc
                    .withUdlrMovementBy(1))));

                var monitor = setupInteractionMonitor(game);

                var piece = TsNs.Joq.first<Piece>(game.teams[0].getPieces());

                mouseClickOn(piece, monitor);

                expect(selectedPiece(monitor).id).toBe(piece.id);
            });

            it("Should show Potential Interactions for a selected Piece",() => {
                var game = gameBuilder.startGame(gc => gc
                    .withAttackThenMoveTurnInteractions()
                    .withA3x3NorthSouthBoard()
                    .withHumanLocalAndRemotePlayers()
                    .withATeamForPlayer(1, tc => tc
                    .withAPieceAt(["2x1"], pc => pc
                    .withUdlrMovementBy(1))));

                var monitor = setupInteractionMonitor(game);

                var boardTiles = game.board.getTiles();
                var piece = boardTiles["2x1"].piece;

                mouseClickOn(piece, monitor);

                var moveUpOneTile = boardTiles["3x1"].potentialInteractions();
                expect(moveUpOneTile.length).toBe(1);

                var moveRightOneTile = boardTiles["2x2"].potentialInteractions();
                expect(moveRightOneTile.length).toBe(1);

                var moveDownOneTile = boardTiles["1x2"].potentialInteractions();
                expect(moveRightOneTile.length).toBe(1);
            });

            it("Should move a dragged Piece",() => {
                var game = gameBuilder.startGame(gc => gc
                    .withAttackThenMoveTurnInteractions()
                    .withA3x3NorthSouthBoard()
                    .withHumanLocalAndRemotePlayers()
                    .withATeamForPlayer(1, tc => tc
                    .withAPieceAt(["2x1"], pc => pc
                    .withUdlrMovementBy(1))));

                var monitor = setupInteractionMonitor(game);

                var boardTiles = game.board.getTiles();
                var piece = boardTiles["2x1"].piece;
                var endLocation = boardTiles["2x2"];

                mouseDrag(piece, endLocation, monitor);

                expect(endLocation.piece).toBeDefined();
                expect(endLocation.piece.id).toBe(piece.id);
            });
        });
    });
});

var timeoutServices = {
    immediate: (action: () => void, delay: number) => action(),
    never: (action: () => void, delay: number) => { }
};
timeoutServices.immediate["cancel"] =
timeoutServices.never["cancel"] = () => { };

function setupInteractionMonitor(game: G.Game) {
    return new Bge.Pieces.PieceInteractionMonitor(timeoutServices.immediate, game);
}

function holdMouseDownOn(piece: Piece, monitor: P.PieceInteractionMonitor) {
    performMouseActions(piece, timeoutServices.immediate, monitor, "pieceSelected");
}

function mouseDrag(piece: Piece, endLocation: P.IPieceLocation, monitor: P.PieceInteractionMonitor) {
    mouseDownOn(piece, monitor);
    mouseUpOn(endLocation, monitor);
}

function mouseDownOn(piece: Piece, monitor: P.PieceInteractionMonitor) {
    performMouseActions(piece, timeoutServices.never, monitor, "pieceSelected");
}

function mouseUpOn(location: P.IPieceLocation, monitor: P.PieceInteractionMonitor) {
    performMouseActions(location, timeoutServices.never, monitor, "pieceDeselected");
}

function mouseClickOn(piece: Piece, monitor: P.PieceInteractionMonitor) {
    performMouseActions(piece, timeoutServices.never, monitor, "pieceSelected", "pieceDeselected");
}

function performMouseActions(
    location: P.IPieceLocation,
    timeoutService: Function,
    monitor: P.PieceInteractionMonitor,
    ...eventNames: Array<string>) {
    setTimeoutService(monitor, timeoutService);

    var events = getGame(monitor).events;
    for (var i = 0; i < eventNames.length; i++) {
        events[eventNames[i]].publish(location);
    }
}

function setTimeoutService(monitor, timeoutService) {
    monitor._timeoutService = timeoutService;
}

function getGame(monitor): G.Game {
    return monitor._game;
}

function highlightedPiece(monitor): Piece {
    return monitor._currentlyHighlightedPiece;
}

function selectedPiece(monitor): Piece {
    return monitor._currentlySelectedPiece;
}