﻿var AgileObjects;
(function (AgileObjects) {
    (function (StrategyGame) {
        (function (Game) {
            Game.game.directive("draggable", function () {
                return {
                    scope: {
                        dragStart: "&",
                        dragEnd: "&",
                        item: "="
                    },
                    link: function ($scope, element) {
                        // this gives us the native JS object
                        var el = element[0];

                        el.draggable = true;

                        el.addEventListener("dragstart", function (e) {
                            e.dataTransfer.effectAllowed = "move";
                            e.dataTransfer.setData("Text", this.id);
                            this.classList.add("drag");
                            $scope.$apply("dragStart()");
                            return false;
                        }, false);

                        el.addEventListener("dragend", function () {
                            this.classList.remove("drag");
                            $scope.$apply("dragEnd()");
                            return false;
                        }, false);
                    }
                };
            });

            Game.game.directive("droppable", function () {
                return {
                    scope: {
                        drop: "&",
                        item: "="
                    },
                    link: function ($scope, element) {
                        // again we need the native object
                        var el = element[0];

                        el.addEventListener("dragover", function (e) {
                            e.dataTransfer.dropEffect = "move";

                            // allows us to drop
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            this.classList.add("over");
                            return false;
                        }, false);

                        el.addEventListener("dragenter", function () {
                            this.classList.add("over");
                            return false;
                        }, false);

                        el.addEventListener("dragleave", function () {
                            this.classList.remove("over");
                            return false;
                        }, false);

                        el.addEventListener("drop", function (e) {
                            // Stops some browsers from redirecting.
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }

                            this.classList.remove("over");

                            var item = document.getElementById(e.dataTransfer.getData("Text"));
                            this.appendChild(item);

                            // call the drop passed drop function
                            $scope.$apply("drop()");

                            return false;
                        }, false);
                    }
                };
            });
        })(StrategyGame.Game || (StrategyGame.Game = {}));
        var Game = StrategyGame.Game;
    })(AgileObjects.StrategyGame || (AgileObjects.StrategyGame = {}));
    var StrategyGame = AgileObjects.StrategyGame;
})(AgileObjects || (AgileObjects = {}));
//# sourceMappingURL=C:/Data/VisualStudio/StrategyGame/StrategyGame.Web//Scripts/Directives/Game.DragAndDrop.js.map
