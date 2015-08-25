var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var List1 = (function (_super) {
        __extends(List1, _super);
        //#region Constructors
        function List1(portalService) {
            _super.call(this, portalService, '/SampleTS/list1/list1.html', 'List-1', 'TypeScript based', 315);
            //this.isCommandNew = true;
            //this.commandNewText = 'Detail-1';
            this.statusbar = 'List-1...';
            this.activate();
        }
        //#endregion
        //#region Methods - Overrides for Blade
        List1.prototype.onCommandNew = function () {
            AzurePortalNg.Debug.write('[sampleTS-debug] \'List1.onCommandNew\' called.', [this]);
            this.portalService.bladeArea.addBlade('/SampleTS/detail1/detail1.html', this.path);
        };
        List1.prototype.onNavigateTo = function (id) {
            AzurePortalNg.Debug.write('[sampleTS-debug] \'List1.onNavigateTo\' called.', [this, id]);
            this.portalService.bladeArea.parameter.id = id;
            this.portalService.bladeArea.addBlade('/SampleTS/detail1/detail1.html', this.blade.path);
            this.portalService.$rootScope.$broadcast('bladeService.parameter', this.portalService.bladeArea.parameter);
        };
        //#endregion
        //#region Data Access
        List1.prototype.onGetDataList = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'List1.onGetDataList\' called.', [this]);
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return List1;
    })(AzurePortalNg.BladeList);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('list1', ['azurePortalNg.portalService', List1]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=list1.js.map