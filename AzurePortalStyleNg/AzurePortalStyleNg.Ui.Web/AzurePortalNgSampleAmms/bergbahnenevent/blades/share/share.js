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
            "isCommandSearch": true,
            "isCommandNew": true,
            "commandNew": commandNew,
            "isCommandSave": true,
            "isCommandCopy": true,
            "isCommandDelete": true,
            "isCommandCancel": true,
            "isCommandBrowse": true,
            "isCommandStart": true,
            "isCommandStop": true,
            "isCommandRestart": true,
            "isCommandSwap": true,
            "width": { 'width': '1200px' },
            "widthStackLayout": { 'width': '1150px' },
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
