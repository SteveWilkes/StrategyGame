﻿module AgileObjects.StrategyGame.Game {
    export interface IPiece {
        id: string;
        imageSource: string;
        movementProfile: IPieceMovementProfile;
    }
}