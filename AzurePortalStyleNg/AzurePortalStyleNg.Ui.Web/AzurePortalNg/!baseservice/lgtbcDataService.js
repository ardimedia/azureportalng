var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition
    var LgtbcDataService2 = (function (_super) {
        __extends(LgtbcDataService2, _super);
        //#endregion
        //#region Constructor
        function LgtbcDataService2($http, $q) {
            _super.call(this, $http, $q);
        }
        //#endregion
        //#region Company
        LgtbcDataService2.prototype.setCompanies = function () {
            var that = this;
            return _super.prototype.getData.call(this, '/api/lgtbc/CompaniesGetAll')
                .success(function (data, status, headers, config) {
                that.companies = angular.fromJson(data);
            })
                .error(function (data, status, headers, config) {
            });
        };
        return LgtbcDataService2;
    }(AzurePortalNg.DataService));
    AzurePortalNg.LgtbcDataService2 = LgtbcDataService2;
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('lgtbc')
            .service('lgtbcDataService2', ['$http', '$q', LgtbcDataService2]);
    })();
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=lgtbcDataService.js.map