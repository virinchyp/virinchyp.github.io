sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockEmpDetailPart1 = BlockBase.extend("sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.employment.BlockEmpDetailPart1", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.employment.BlockEmpDetailPart1",
					type: "XML"
				},
				Expanded: {
					viewName: "sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.employment.BlockEmpDetailPart1",
					type: "XML"
				}
			}
		}
	});
	return BlockEmpDetailPart1;
});
