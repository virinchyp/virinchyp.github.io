sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/core/mvc/Controller"], function (JSONModel, Controller) {
	"use strict";

	return Controller.extend("sap.uxap.sample.AnchorBarWithNumbers.controller.AnchorBarWithNumbers", {
		onInit: function () {
			var oJsonModel = new JSONModel("./SharedJSONData/HRData.json");

			this.getView().setModel(oJsonModel, "ObjectPageModel");
		}
	});
});
