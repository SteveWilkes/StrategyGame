﻿module AgileObjects.BoardGameEngine.Pieces {

    export interface IPieceOwner extends TypeScript.IEntity<string> {
        isLocal(): boolean;
        owns(piece: Piece): boolean;
    }
}