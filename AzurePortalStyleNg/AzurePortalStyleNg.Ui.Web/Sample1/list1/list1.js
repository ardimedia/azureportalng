var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Sample1;
(function (Sample1) {
    'use strict';
    //#region Class Definition
    var List1 = (function (_super) {
        __extends(List1, _super);
        //#region Constructors
        function List1(portalService) {
            _super.call(this, portalService, '/Sample1/list1/list1.html', 'List-1', 'TypeScript based', 315);
            //this.isCommandNew = true;
            //this.commandNewText = 'Detail-1';
            this.statusbar = 'List-1...';
            this.activate();
        }
        //#endregion
        //#region Methods - Overrides for Blade
        List1.prototype.onCommandNew = function () {
            AzurePortalNg.Debug.write('[sample1-debug] \'List1.onCommandNew\' called.', [this]);
            this.portalService.bladeArea.addBlade(this.path, '/Sample1/detail1/detail1.html');
        };
        List1.prototype.onNavigateTo = function (id) {
            AzurePortalNg.Debug.write('[sample1-debug] \'List1.onNavigateTo\' called.', [this, id]);
            console.log(id);
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
})(Sample1 || (Sample1 = {}));
//# sourceMappingURL=list1.js.map