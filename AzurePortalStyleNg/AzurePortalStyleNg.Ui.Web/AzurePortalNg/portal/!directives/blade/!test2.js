(function () {
    'use strict';
    angular.module('azureportalng').controller('testcontroller', ['$scope', '$http', testcontroller]);
    function testcontroller($scope, $http) {
        /* jshint validthis: true */
        var vm = this;
        vm.blade = {
            title: "Bergbahnen.Li",
            subTitle: "Aktienregister",
            isInnerHtml: true,
            bladeWidth: { 'width': '600px' },
            bladeStackLayoutWidth: { 'width': '550px' },
            items: [
                { ShareRegisterPkId: 2192, Quantity: 5000, Salutation: "Sehr geehrte Damen und Herren ", Title: "", LastName: "", FirstName: "AAJ Familienstiftung", AddressLine1: "Landstrasse 11", AddressLine2: "", PostalCode: "9495 Triesen", City: "9495 Triesen", Country: "9495 Triesen", DiscountLevel: 10, NumberOfCards: 1, CapitalExpenditure: 10000, RecordModifiedBy: "Initialize", RecordModifiedAt: "2014-08-04T18:32:36.6446581+02:00", RecordTimestamp: "AAAAAAAADH8=" },
                { ShareRegisterPkId: 2193, Quantity: 500000, Salutation: "Sehr geehrte Damen und Herren ", Title: "", LastName: "", FirstName: "Allfina ", AddressLine1: "Postfach 818", AddressLine2: "", PostalCode: "9494 Schaan", City: "9494 Schaan", Country: "9494 Schaan", DiscountLevel: 40, NumberOfCards: 4, CapitalExpenditure: 1000000, RecordModifiedBy: "Initialize", RecordModifiedAt: "2014-08-04T18:32:36.6446581+02:00", RecordTimestamp: "AAAAAAAADIA=" },
                { ShareRegisterPkId: 2194, Quantity: 5000, Salutation: "Sehr geehrte Damen und Herren ", Title: "", LastName: "", FirstName: "Allgemeines Treuunternehmen", AddressLine1: "Aeulestrasse 5", AddressLine2: "", PostalCode: "9490 Vaduz", City: "9490 Vaduz", Country: "9490 Vaduz", DiscountLevel: 10, NumberOfCards: 1, CapitalExpenditure: 10000, RecordModifiedBy: "Initialize", RecordModifiedAt: "2014-08-04T18:32:36.6456632+02:00", RecordTimestamp: "AAAAAAAADIE=" }
            ]
        };
        function navigateTo(id) {
            //console.log(id);
        }
    }
})();
//# sourceMappingURL=!test2.js.map