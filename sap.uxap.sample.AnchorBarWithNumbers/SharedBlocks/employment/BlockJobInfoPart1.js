sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockJobInfoPart1 = BlockBase.extend("sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.employment.BlockJobInfoPart1", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.employment.BlockJobInfoPart1",
					type: "XML"
				},
				Expanded: {
					viewName: "sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.employment.BlockJobInfoPart1",
					type: "XML"
				}
			}
		}
	});

	return BlockJobInfoPart1;
});
