sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/suite/ui/commons/util/DateUtils", "sap/m/MessageToast"],
	function (Controller, JSONModel, DateUtils, MessageToast) {
		"use strict";

		/**
		 * A context path is the first path of window.locatin.pathname (e.g. sapui5-sdk-dist). It may be empty.
		 * @returns {string} The context path based on the windows url
		 * @private
		 */
		function getBasePath() {
			return sap.ui.require.toUrl("sap/suite/ui/commons/sample/Timeline");
		}


		function convertData(oEvent) {
			var oData,
				oModel = oEvent.getSource(),
				sBasePath = getBasePath();

			if (!oEvent.getParameters().success) {
				return;
			}

			oData = oModel.getData();
			oData.Employees.forEach(function (oEmployee) {
				oEmployee.HireDate = DateUtils.parseDate(oEmployee.HireDate);
				oEmployee.Photo = sBasePath + oEmployee.Photo;
			});
			oModel.updateBindings(true);
		}
		var oPageController = Controller.extend("sap.suite.ui.commons.sample.Timeline.Timeline", {
			onInit: function () {
				var oModel = new JSONModel(sap.ui.require.toUrl("sap/suite/ui/commons/sample/Timeline/data.json"));
				oModel.attachRequestCompleted(convertData);
				this.getView().setModel(oModel);
				this._timeline = this.byId("idTimeline");
				this.byId("idTimeline").setCustomGrouping(function(oDate) {
					return {
						key: oDate.getFullYear() ,
						title: oDate.getFullYear()  ,
						date: oDate
					};
				});

				this.getView().attachEvent("afterRendering", function () {
					// in production you would probably want to use something like ScrollContainer
					// but for demo purpose we want to keep it simple
					// sctretch:true on container prevents scrolling by default
					document.querySelector('section').style.overflow = "auto";
				});
			},
			onUserNameClick : function(oEvent) {
			//	MessageToast.show(oEvent.getSource().getUserName() + " is pressed.");
			},
			onPressItems: function (evt) {
				// Get the binding context of the pressed TimelineItem
				const context = evt.getSource().getBindingContext();
			
				// Retrieve the Link property from the context
				const url = context.getProperty("url");
			
				// Ensure the URL is valid and fully qualified
				if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
					window.open(url, "_blank");
				} else {
					sap.m.MessageToast.show("Invalid or missing URL.");
				}
			},
			
			enableScrollSelected: function (oEvent) {
				var bSelected = oEvent.getParameter("selected");
				this._timeline.setEnableScroll(bSelected);
			},
			textHeightChanged: function (oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getProperty("key");
				this._timeline.setTextHeight(sKey);
			},
			groupByChanged: function (oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getProperty("key");
				this._timeline.setGroupByType(sKey);
			},
			alignmentChanged: function (oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getProperty("key");
				if (sKey === "DoubleSided") {
					this._timeline.setEnableDoubleSided(true);
				} else {
					this._timeline.setEnableDoubleSided(false);
					this._timeline.setAlignment(sKey);
				}
			},
			dataChanged: function (oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getProperty("key"),
					sFileName = "data.json";

				if (sKey !== "A") {
					sFileName = sKey === "B" ? "data1.json" : "data2.json";
				}

				var oModel = new JSONModel(sap.ui.require.toUrl("sap/suite/ui/commons/sample/Timeline/" + sFileName));
				oModel.attachRequestCompleted(convertData);
				this.getView().setModel(oModel);
			},
			orientationChanged: function (oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getProperty("key"),
					itemA = sKey === "Horizontal" ? "Top" : "Left",
					itemB = sKey === "Horizontal" ? "Bottom" : "Right",
					oFirstItem = this.byId("idAlignmentFirst"),
					oSecondItem = this.byId("idAlignmentSecond");

				oFirstItem.setText(itemA);
				oFirstItem.setKey(itemA);

				oSecondItem.setText(itemB);
				oSecondItem.setKey(itemB);

				this._timeline.setAxisOrientation(sKey);
			}
		});
		return oPageController;
	});
