sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var GoalsBlock = BlockBase.extend("sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.goals.GoalsBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.goals.GoalsBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.goals.GoalsBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return GoalsBlock;
});
