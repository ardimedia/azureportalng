(function () {
    'use strict';

    angular.module('azureportalng').controller('bergbahneneventShare', ['$scope', '$http', '$location', 'bladeService', 'shareService', bergbahneneventShare]);

    function bergbahneneventShare($scope, $http, $location, bladeService, shareService) {
        var vm = this;

        vm.blade = {
            "$schema": "/AzurePortalNg/$schema/navgrid.json?reload",
            "title": "Aktie: Harry Pfleger",
            "subTitle": "Bearbeiten",
            "isNavGrid": true,
            "isCommandNew": true,
            "commandNew": commandNew,
            "isCommandSave": true,
            "isCommandDelete": true,
            "isCommandCancel": true,
            "width": { 'width': '600px' },
            "widthStackLayout": { 'width': '550px' },
            "navGrid": {
                "items": [
                    { "title": "Name", "bladePath": "/AzurePortalNgSampleAmms/bergbahnenevent/blades/shares/shares.html" },
                    { "title": "Vorname", "bladePath": "/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html" },
                    { "title": "Ort", "bladePath": "/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html" },
                    { "title": "Anzahl", "bladePath": "/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html" }
                ]
            }
        };

        setShare(shareService.share);

        shareService.shareChanged.bind(function (share) {
            setShare(share);
        });

        function setShare(share) {
            //vm.blade.title = "Aktie: " + share.title;
        }

        function commandNew() {
            console.log('commandNewFunction');
        }
    }
})();
//# sourceMappingURL=share.js.map
