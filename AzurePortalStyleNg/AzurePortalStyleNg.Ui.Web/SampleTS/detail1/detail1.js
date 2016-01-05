var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var Detail1 = (function (_super) {
        __extends(Detail1, _super);
        //#region Constructors
        function Detail1(portalService) {
            _super.call(this, portalService, '/SampleTS/detail1/detail1.html', 'Detail-1', 'TypeScript based', 415);
            this.activate();
        }
        //#endregion
        //#region Methods
        Detail1.prototype.onActivate = function () {
            var customer = this.portalService.parameter.item;
            if (this.portalService.parameter.action === 'new') {
                this.item = customer;
                return null;
            }
            else if (this.portalService.parameter.action === 'selected') {
                return this.portalService.$http({ method: 'GET', url: '/customer/' + customer.customerPkId });
            }
        };
        return Detail1;
    })(AzurePortalNg.BladeDetail);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('detail1', ['azurePortalNg.portalService', Detail1]);
    })();
})(SampleTS || (SampleTS = {}));
