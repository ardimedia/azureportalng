"use strict";
var azureportalng = require('azureportalng');
var UserControlBase = (function () {
    //#endregion
    //#region Constructors
    function UserControlBase(portalService) {
        azureportalng.Debug.write('[azureportalng-debug] \'UserControlBase\' constructor called.', [this, portalService]);
        this.portalService = portalService;
    }
    return UserControlBase;
}());
exports.UserControlBase = UserControlBase;
