sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
        "use strict";

        return Controller.extend("com.ibm.extensions.fragment.View1", {
            onInit: function () {

            },
            onButtonHover: function (oEvent) {
                var oButton = oEvent.getSource(),
                  oView = this.getView();
                  debugger
                // create popover
                if (!this._pPopover) {
                  this._pPopover = Fragment.load({
                    id: oView.getId(),
                    name: "com.ibm.extensions.fragment.Popover",
                    controller: this,
                  }).then(function (oPopover) {
                    oView.addDependent(oPopover);
                    //   oPopover.bindElement("/ProductCollection/0");
                    return oPopover;
                  });
                }
                this._pPopover.then(function (oPopover) {
                  oPopover.openBy(oButton);
                });
              }
        });
    });