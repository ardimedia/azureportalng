"use strict";
var azureportalng = require('azureportalng');
var ShellController = (function () {
    function ShellController() {
        console.log('ShellController');
        this.vm.portalService = new azureportalng.PortalService(null);
        this.vm.portalService.panorama.isVisible = true;
        this.vm.title = 'Jabba';
    }
    return ShellController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShellController;
