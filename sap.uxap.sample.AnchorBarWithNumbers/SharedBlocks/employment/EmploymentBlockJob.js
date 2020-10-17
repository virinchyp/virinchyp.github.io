sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var EmploymentBlockJob = BlockBase.extend("sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.employment.EmploymentBlockJob", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.employment.EmploymentBlockJobCollapsed",
					type: "XML"
				},
				Expanded: {
					viewName: "sap.uxap.sample.AnchorBarWithNumbers.SharedBlocks.employment.EmploymentBlockJobExpanded",
					type: "XML"
				}
			}
		}
	});

	return EmploymentBlockJob;
});
