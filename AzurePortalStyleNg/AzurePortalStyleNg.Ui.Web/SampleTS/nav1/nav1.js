var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTS;
(function (SampleTS) {
    //#region Class Definition
    var Nav1 = (function (_super) {
        __extends(Nav1, _super);
        //#region Constructors
        function Nav1(portalService) {
            _super.call(this, portalService, '/SampleTS/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315);
            AzurePortalNg.Debug.write('[samplets-debug] \'Nav1\' constructor called.', [this]);
            this.navItems = [
                new AzurePortalNg.BladeNavItem('Navigation 1 (BladeNav)', '/SampleTS/nav1/nav1.html'),
                new AzurePortalNg.BladeNavItem('Blade 1-1 (BladeList)', '/SampleTS/blade11/blade11.html', null, null, true, this.callback1, this),
                new AzurePortalNg.BladeNavItem('Blade 2 (BladeList)', '/SampleTS/blade2/blade2.html'),
                new AzurePortalNg.BladeNavItem('Blade 2-1 (BladeList)', '/SampleTS/blade21/blade21.html'),
                new AzurePortalNg.BladeNavItem('List 1 (BladeList)', '/SampleTS/list1/list1.html'),
                new AzurePortalNg.BladeNavItem('Detail 1 (BladeDetail)', '/SampleTS/detail1/detail1.html'),
                new AzurePortalNg.BladeNavItem(),
                new AzurePortalNg.BladeNavItem('no path'),
                new AzurePortalNg.BladeNavItem('go to microsoft.com', null, 'http://www.microsoft.com'),
            ];
            this.statusbar = 'Nav 1 loaded.';
        }
        //#endregion
        //#region Methods
        Nav1.prototype.onNavigateTo = function (path) {
            AzurePortalNg.Debug.write('[samplets-debug] \'Nav1.onNavigateTo\' called.', [this, path]);
            if (path === '') {
                return;
            }
            this.portalService.bladeArea.raiseAddBladeEvent({ path: path, pathSender: this.blade.path });
        };
        Nav1.prototype.callback1 = function () {
            console.log(this);
        };
        return Nav1;
    }(AzurePortalNg.BladeNav));
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('nav1', ['azurePortalNg.portalService', Nav1]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=nav1.js.map