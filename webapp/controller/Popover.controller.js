sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.ibm.extensions.controller.Popover", {
            onInit: function () {},
		handleEmailPress: function (oEvent) {
            debugger
			this.byId("myPopover").close();
			MessageToast.show("E-Mail has been sent");
		}
        });
    });