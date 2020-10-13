sap.ui.define([], function () {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit: function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},
		Total: function (sValue) {
			var sum = 0,
				items = this.getView().byId("orderLineItems").getItems();
			for (var i = 0; i < items.length; i++) {
				sum = sum + parseInt(items[i].getBindingContext().getProperty('UnitPrice'));
			}

			return sum;

		}

	};

});