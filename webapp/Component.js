jQuery.sap.declare("ns.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("ns.Component", {
	metadata: {
		"manifest": "json"
	}
});