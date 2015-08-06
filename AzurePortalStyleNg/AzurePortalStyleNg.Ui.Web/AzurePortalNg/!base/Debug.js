//#region Make sure console.log is working in any case, even IE9
if ($('html').hasClass('k-ie9')) {
    if (typeof console !== 'object')
        window.console = {};
    if (typeof console.log !== 'object')
        window.console.log = function () { };
}
//#endregion
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: Debug
    var Debug = (function () {
        //#endregion
        //#region Constructors
        function Debug() {
        }
        //#endregion
        //#region Methods
        Debug.enable = function (key) {
            Debug.isEnabled = true;
            if (key) {
                Debug.keys.push(key);
            }
        };
        Debug.disable = function (key) {
            if (key) {
                var indexToDelete = Debug.keys.indexOf(key);
                Debug.keys.splice(indexToDelete, 1);
            }
            if (Debug.keys.length === 0) {
                Debug.isEnabled = false;
            }
        };
        Debug.write = function (text, objects) {
            if (Debug.isEnabled) {
                console.log(text);
                if (objects !== undefined && Debug.isWithObjects) {
                    objects.forEach(function (item) {
                        console.log(item);
                    });
                }
            }
        };
        /** Extract the key (e.g. [azureportal] from a string */
        Debug.extractKey = function (text) {
            var extractKey = '';
            var firstCharacter = text.substring(0, 1);
            if (firstCharacter === '[') {
                // Find closing bracket
                var closingPos = text.indexOf(']');
                if (closingPos > 0) {
                    extractKey = text.substring(0, closingPos + 1);
                }
            }
            return extractKey;
        };
        //#region Properties
        Debug.isEnabled = false;
        Debug.isWithObjects = false;
        Debug.keys = new Array();
        return Debug;
    })();
    AzurePortalNg.Debug = Debug;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=Debug.js.map