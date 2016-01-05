var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    var DataService = (function () {
        //#region Constructor
        function DataService($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        //#endregion
        //#region Properties
        //#endregion
        //#region Events
        //#endregion
        //#region Listener
        //#endregion
        //#region Methods
        DataService.prototype.getData = function (url) {
            var that = this;
            return that.$http({ method: 'GET', url: url })
                .success(function (data, status, headers, config) {
            })
                .error(function (data, status, headers, config) {
            });
        };
        return DataService;
    })();
    AzurePortalNg.DataService = DataService;
})(AzurePortalNg || (AzurePortalNg = {}));
