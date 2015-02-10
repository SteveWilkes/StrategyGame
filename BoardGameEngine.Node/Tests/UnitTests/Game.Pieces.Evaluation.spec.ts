﻿require("../../public/javascripts/generic/AgileObjects.TypeScript.Extensions");
var Ao: Typings.AgileObjectsNs = require("../../InternalModules");
var Bge = Ao.BoardGameEngine;
var TsNs = Ao.TypeScript;
var gameBuilder: Ut.IGameBuilderService = require("./Game.GameBuilder");

describe("Game", () => {
    describe("Pieces", () => {
        describe("Evaluation", () => {
            it("Should evaluate a Piece as Unoccupied", () => {
                var game = gameBuilder.startGame(gc => gc
                    .withAttackThenMoveTurnInteractions()
                    .withA3x3NorthSouthBoard()
                    .withHumanLocalAndRemotePlayers()
                    .withATeamForPlayer(1, tc => tc
                        .withAPieceAt(["1x1"], pc => pc
                            .withUdlrMovementBy(1))));

                var subjectPiece = TsNs.Joq.first<Piece>(game.teams[0].getPieces());

                expect(subjectPiece.isOccupied()).toBeFalsy();

                var evaluator = new Bge.Pieces.IsSubjectPieceOccupiedEvaluator();

                expect(evaluator.evaluate(subjectPiece)).toBeFalsy();
            });

            it("Should evaluate a Piece as Occupied", () => {
                var game = gameBuilder.startGame(gc => gc
                    .withAttackThenMoveTurnInteractions()
                    .withA3x3NorthSouthBoard()
                    .withHumanLocalAndRemotePlayers()
                    .withATeamForPlayer(1, tc => tc
                        .withAPieceAt(["1x1"], pc => pc
                            .withUdlrMovementBy(1)
                            .withUdlrAttachmentTo(["2"]))
                        .withAPieceAt(["1x2"], pc => pc
                            .withUdlrMovementBy(1))));

                var pieces = TsNs.Joq.toArray<Piece>(game.teams[0].getPieces());

                var subjectPiece = pieces[0];
                var targetPiece = pieces[1];
                var pieceInteractions = subjectPiece.interactionProfile.getPotentialInteractions(subjectPiece, game);

                TsNs.Joq
                    .select<IPieceInteraction>(pieceInteractions)
                    .where(inter => inter.location.coordinates.signature === "1x2")
                    .first()
                    .complete();

                expect(targetPiece.isOccupied()).toBeTruthy();
                expect(targetPiece.piece).toBe(subjectPiece);

                var evaluator = new Bge.Pieces.IsSubjectPieceOccupiedEvaluator();

                expect(evaluator.evaluate(targetPiece)).toBeTruthy();
            });
        });
    });
});