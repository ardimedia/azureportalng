var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Sample1;
(function (Sample1) {
    'use strict';
    //#region Class Definition
    var Detail1 = (function (_super) {
        __extends(Detail1, _super);
        //#region Properties
        //#endregion
        //#region Constructors
        function Detail1(portalService) {
            _super.call(this, portalService, '/Sample1/detail1/detail1.html', 'Detail-1', 'TypeScript based', 315);
            this.statusbar = 'Detail-1...';
        }
        //#endregion
        //#region Data Access
        Detail1.prototype.onGetDataDetail = function () {
            return this.portalService.$http({ method: 'GET', url: '/customer/1' });
        };
        return Detail1;
    })(AzurePortalNg.BladeDetail);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('detail1', ['azurePortalNg.portalService', Detail1]);
    })();
})(Sample1 || (Sample1 = {}));
//# sourceMappingURL=detail1.js.map