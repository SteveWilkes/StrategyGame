﻿module AgileObjects.BoardGameEngine {

    export class GlobalEventSet {
        static instance = new GlobalEventSet();

        public containerResized = new TypeScript.EventHub<Boards.Board>();
    }
} 