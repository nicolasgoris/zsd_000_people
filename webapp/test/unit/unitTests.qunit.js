/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"be/ap/edu/zsd_000_people/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});