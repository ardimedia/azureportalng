(function () {
    'use strict';

    angular.module('azureportalng').factory('shareService', ['$http', '$rootScope', shareService]);

    function shareService($http, $rootScope) {
        var service = {
            shares: [],
            share: {},
            // Methods
            selectShare: selectShare,
            // Events
            shareChanged: EventHelper()
        };

        service.shares = getShares();

        return service;

        function getShares() {
            return [
                { "title": "Aktie 1", "bladePath": "aktie1" },
                { "title": "Aktie 2", "bladePath": "aktie2" },
                { "title": "Aktie 3", "bladePath": "aktie3" },
                { "title": "Aktie 4", "bladePath": "aktie4" },
                { "title": "Aktie 5", "bladePath": "aktie5" },
                { "title": "Aktie 6", "bladePath": "aktie6" },
                { "title": "Aktie 7", "bladePath": "aktie7" },
                { "title": "Aktie 8", "bladePath": "aktie8" },
                { "title": "Aktie 9", "bladePath": "aktie9" },
                { "title": "Aktie 10", "bladePath": "aktie10" },
                { "title": "Aktie 11", "bladePath": "aktie11" },
                { "title": "Aktie 12", "bladePath": "aktie12" },
                { "title": "Aktie 13", "bladePath": "aktie13" },
                { "title": "Aktie 14", "bladePath": "aktie14" },
                { "title": "Aktie 15", "bladePath": "aktie15" },
                { "title": "Aktie 16", "bladePath": "aktie16" },
                { "title": "Aktie 17", "bladePath": "aktie17" },
                { "title": "Aktie 18", "bladePath": "aktie18" },
                { "title": "Aktie 19", "bladePath": "aktie19" },
                { "title": "Aktie 20", "bladePath": "aktie20" },
                { "title": "Aktie 21", "bladePath": "aktie21" },
                { "title": "Aktie 22", "bladePath": "aktie22" },
                { "title": "Aktie 23", "bladePath": "aktie23" },
                { "title": "Aktie 24", "bladePath": "aktie24" },
                { "title": "Aktie 25", "bladePath": "aktie25" },
                { "title": "Aktie 26", "bladePath": "aktie26" },
                { "title": "Aktie 27", "bladePath": "aktie27" },
                { "title": "Aktie 28", "bladePath": "aktie28" },
                { "title": "Aktie 29", "bladePath": "aktie29" },
                { "title": "Aktie 30", "bladePath": "aktie30" }
            ];
        }

        function selectShare(id) {
            service.share = service.shares[id];
            service.shareChanged.trigger(service.share);
        }

        function shareChanged(share) {
            //console.log(share);
        }

        function EventHelper() {
            var event = { handlers: [], bind: function (fn) {
                }, trigger: function (args) {
                } };
            event.handlers = [];

            event.bind = function (fn) {
                event.handlers.push(fn);
            };

            event.trigger = function (args) {
                for (var i = 0; i < event.handlers.length; i++) {
                    event.handlers[i].call(event, args);
                }
            };

            return event;
        }
    }
})();
//# sourceMappingURL=shareService.js.map
