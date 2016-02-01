var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTS;
(function (SampleTS) {
    //#region Class Definition
    var List1 = (function (_super) {
        __extends(List1, _super);
        //#region Constructors
        function List1(portalService) {
            _super.call(this, portalService, '/SampleTS/list1/list1.html', 'List-1', 'TypeScript based', 315);
            this.activate();
        }
        //#endregion
        //#region Methods
        List1.prototype.onActivate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'List1.onActivate\' called.', [this]);
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        List1.prototype.onCommandNew = function () {
            AzurePortalNg.Debug.write('[samplets-debug] \'List1.onCommandNew\' called.', [this]);
            this.portalService.parameter.action = 'new';
            this.portalService.parameter.item = new SampleTS.Customer(0, 'firstName', 'lastName');
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/SampleTS/detail1/detail1.html', pathSender: this.blade.path });
        };
        List1.prototype.onNavigateTo = function (customer) {
            AzurePortalNg.Debug.write('[samplets-debug] \'List1.onNavigateTo\' called.', [this, customer]);
            this.portalService.parameter.action = 'selected';
            this.portalService.parameter.item = customer;
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/SampleTS/detail1/detail1.html', pathSender: this.blade.path });
        };
        return List1;
    }(AzurePortalNg.BladeList));
    //#endregion
    //#region Angular Registration
    (function () {
        angular.module('sampleTsApp').controller('list1', ['azurePortalNg.portalService', List1]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=List1.js.map