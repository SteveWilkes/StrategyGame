﻿import bundleUp = require("bundle-up");

module.exports = (assets: bundleUp.IBundleUpAssets) => {
    assets.root = __dirname;

    assets.addCss("/public/stylesheets/site.styl");
    assets.addCss("/public/stylesheets/board-tile-attack-animation.styl");

    // https://github.com/btford/angular-socket-io
    assets.addJs("/public/javascripts/Generic/BtFord.Angular.Socket.io.js");

    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.RandomStringGenerator.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.Extensions.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.TryGetResult.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.Dictionary.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.EventCallbackSet.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.EventHub.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.EventMapping.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.Coordinates.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.CoordinatesLibrary.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.CoordinateTranslator.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.CoordinateTranslatorLibrary.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.TypeScript.ValueParser.js");
    assets.addJs("/public/javascripts/Generic/Annotations/AgileObjects.TypeScript.EntityAnnotationBase.js");
    assets.addJs("/public/javascripts/Generic/Annotations/AgileObjects.TypeScript.EntityAnnotationManager.js");
    assets.addJs("/public/javascripts/Generic/Annotations/AgileObjects.TypeScript.EntityAnnotationMapperBase.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.AlwaysTrueEvaluator.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.EvaluatorBase.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.BooleanMethodEvaluator.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.PropertyEvaluator.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.NegationEvaluator.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.CompositeAndEvaluator.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.CompositeOrEvaluator.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.EvaluatorData.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.EvaluatorSet.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.EvaluatorParser.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.EntityData.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.EvaluatorPatternExpanderBase.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.EvaluatorPatternMapperBase.js");
    assets.addJs("/public/javascripts/Generic/Evaluation/AgileObjects.TypeScript.EvaluatorMapper.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.Angular.JQuery.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.Angular.Services.IdGeneration.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.Angular.Services.EventPropogation.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.Angular.Services.Sockets.js");
    assets.addJs("/public/javascripts/Generic/AgileObjects.Angular.ScopeEvaluator.js");
    assets.addJs("/public/javascripts/Directives/AgileObjects.Angular.Directives.AddClassOnEvent.js");
    assets.addJs("/public/javascripts/Directives/AgileObjects.Angular.Directives.DragAndDrop.js");
    assets.addJs("/public/javascripts/Directives/AgileObjects.Angular.Directives.Moveable.js");
    assets.addJs("/public/javascripts/Directives/AgileObjects.Angular.Directives.ScrollToBottom.js");
    assets.addJs("/public/javascripts/Directives/AgileObjects.Angular.Directives.SizeToContainer.js");
    assets.addJs("/public/javascripts/Directives/AgileObjects.Angular.Directives.Tabs.js");
    assets.addJs("/public/javascripts/App.js");
    assets.addJs("/public/javascripts/Boards/BoardSizeDefaults.js");
    assets.addJs("/public/javascripts/Boards/BoardDisplayManager.js");
    assets.addJs("/public/javascripts/Boards/BoardDisplayManager.Angular.js");
    assets.addJs("/public/javascripts/Pieces/PieceConfigData.js");
    assets.addJs("/public/javascripts/Pieces/NullPieceLocation.js");
    assets.addJs("/public/javascripts/Pieces/PieceLocationBase.js");
    assets.addJs("/public/javascripts/Players/Player.js");
    assets.addJs("/public/javascripts/Boards/BoardTile.js");
    assets.addJs("/public/javascripts/Boards/BoardTileAnnotation.js");
    assets.addJs("/public/javascripts/Boards/BoardPosition.js");
    assets.addJs("/public/javascripts/Boards/BoardRowConfig.js");
    assets.addJs("/public/javascripts/Boards/BoardOrientationTranslator.js");
    assets.addJs("/public/javascripts/Boards/BoardType.js");
    assets.addJs("/public/javascripts/Boards/GetBoardTypeQuery.js");
    assets.addJs("/public/javascripts/Boards/GetBoardTypeQuery.Angular.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/PieceMovement.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/PieceAttack.js");
    assets.addJs("/public/javascripts/GlobalEventSet.js");
    assets.addJs("/public/javascripts/Games/GameEventSet.js");
    assets.addJs("/public/javascripts/Games/GameEvaluatorPatternMapper.js");
    assets.addJs("/public/javascripts/Games/GameEvaluatorPatternMapper.Angular.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/NullPotentialInteraction.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/PieceInteractionBase.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/PieceMovementInteractionBase.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/AddDestinationPieceToPieceInteraction.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/MovePieceToDestinationInteraction.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/MovePieceToDestinationPieceInteraction.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/AttackDestinationPieceInteraction.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/PieceInteractionCalculator.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/PieceInteractionProfile.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/PieceInteractionMonitor.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/PieceInteractionMonitor.Angular.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/ReplacePieceWithAttachedPiece.js");
    assets.addJs("/public/javascripts/Pieces/TakenPieceLocation.js");
    assets.addJs("/public/javascripts/Interactions/TurnDefinition.js");
    assets.addJs("/public/javascripts/Interactions/TurnInteractionDefinition.js");
    assets.addJs("/public/javascripts/Interactions/InteractionData.js");
    assets.addJs("/public/javascripts/Interactions/TurnData.js");
    assets.addJs("/public/javascripts/Status/PlayerData.js");
    assets.addJs("/public/javascripts/Status/GameData.js");
    assets.addJs("/public/javascripts/Status/ClientGameCoordinator.js");
    assets.addJs("/public/javascripts/Interactions/PotentialInteractionsData.js");
    assets.addJs("/public/javascripts/Interactions/TurnRegulator.js");
    assets.addJs("/public/javascripts/Status/TurnManager.js");
    assets.addJs("/public/javascripts/Status/History.js");
    assets.addJs("/public/javascripts/Status/StatusData.js");
    assets.addJs("/public/javascripts/Ui/GameEventPropogator.js");
    assets.addJs("/public/javascripts/Ui/UrlManager.js");
    assets.addJs("/public/javascripts/Ui/CompositeClientComponentSet.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/PieceInteractionData.js");
    assets.addJs("/public/javascripts/Pieces/Interactions/RelatedLocationCalculator.js");
    assets.addJs("/public/javascripts/Pieces/Piece.js");
    assets.addJs("/public/javascripts/Pieces/PieceDefinition.js");
    assets.addJs("/public/javascripts/Pieces/PieceDataSet.js");
    assets.addJs("/public/javascripts/Pieces/PieceDefinitionMapper.js");
    assets.addJs("/public/javascripts/Teams/Team.js");
    assets.addJs("/public/javascripts/Teams/TeamFactory.js");
    assets.addJs("/public/javascripts/Teams/TeamFactory.Angular.js");
    assets.addJs("/public/javascripts/Boards/BoardDisplayData.js");
    assets.addJs("/public/javascripts/Boards/BoardDisplayDataService.js");
    assets.addJs("/public/javascripts/Boards/TeamAdditionData.js");
    assets.addJs("/public/javascripts/Boards/Board.js");
    assets.addJs("/public/javascripts/Games/GameEntityAnnotationMapper.js");
    assets.addJs("/public/javascripts/Games/GameEntityAnnotationMapper.Angular.js");
    assets.addJs("/public/javascripts/Games/GameType.js");
    assets.addJs("/public/javascripts/Games/GameTypeMapper.js");
    assets.addJs("/public/javascripts/Games/GameTypeMapper.Angular.js");
    assets.addJs("/public/javascripts/Games/GetGameTypeQuery.js");
    assets.addJs("/public/javascripts/Games/GetGameTypeQuery.Angular.js");
    assets.addJs("/public/javascripts/Games/Game.js");
    assets.addJs("/public/javascripts/Games/GameCompletionMonitor.js");
    assets.addJs("/public/javascripts/Games/GameFactory.js");
    assets.addJs("/public/javascripts/Games/GameFactory.Angular.js");
    assets.addJs("/public/javascripts/Games/GameService.js");
    assets.addJs("/public/javascripts/Games/GameService.Angular.js");
    assets.addJs("/public/javascripts/Games/GameController.js");
}