sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var PersonalBlockPart2 = BlockBase.extend("sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.personal.PersonalBlockPart2", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.personal.PersonalBlockPart2",
					type: "XML"
				},
				Expanded: {
					viewName: "sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.personal.PersonalBlockPart2",
					type: "XML"
				}
			}
		}
	});

	return PersonalBlockPart2;
});
