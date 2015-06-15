//#region Make sure console.log is working in any case, even IE9
if (typeof console !== 'object')
    window.console = {};
if (typeof console.log !== 'object')
    window.console.log = function () { };
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
        Debug.enable = function () {
            this.isEnabled = true;
        };
        Debug.disable = function () {
            this.isEnabled = false;
        };
        Debug.write = function (text, objects) {
            if (this.isEnabled) {
                console.log(text);
                if (objects !== undefined && this.isWithObjects) {
                    objects.forEach(function (item) {
                        console.log(item);
                    });
                }
            }
        };
        //#region Properties
        Debug.isEnabled = false;
        Debug.isWithObjects = false;
        return Debug;
    })();
    AzurePortalNg.Debug = Debug;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=Debug.js.map