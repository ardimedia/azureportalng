var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: BladeList
    var BladeList = (function (_super) {
        __extends(BladeList, _super);
        //#endregion
        //#region Constructor
        function BladeList(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            _super.call(this, portalService, path, title, subtitle, width);
            //#region Properties
            this.items = [];
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList\' constructor called.', [this, portalService, path, title, subtitle, width]);
            this.isCommandNew = true;
            this.commandNewText = 'neu';
        }
        //#endregion
        //#region Methods
        BladeList.prototype.activate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.activate\' called.', [this]);
            var that = this;
            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';
            var onActivate = that.onActivate();
            if (onActivate === null || onActivate === undefined) {
            }
            else {
                onActivate.success(function (data) {
                    that.items = data;
                    that.statusbar = '';
                    that.statusbarClass = '';
                }).error(function (data, status, headers, config) {
                    that.statusbar = 'FEHLER: ' + data;
                    that.statusbarClass = 'message-info message-off';
                });
            }
        };
        BladeList.prototype.onActivate = function () {
            throw new Error('[AzurePortalNg.BladeList] \'onActivate\' is an abstract function. Define one in the derived class.');
        };
        //#region Filter
        BladeList.prototype.onFilter = function (actual, expected) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.filter\' called.', [this, actual, expected]);
            //#region Documentation
            // > onFilter will be called for each item in an array
            // > If the item is an native type (string, number), the filter will be called with the native type in the parameter 'actual'
            // > If the item is an object, the filter will be called with each property of the object in the parameter 'actual'
            // > If the item is an object, the filter will also be called with the object in the parameter 'actual'
            //#endregion
            //#region Helper functions
            // Implemenation detail:
            // > We must implement the functions in code, since onFilter is not called within the scope of this class (this. not working).
            // Function to convert 'number' to 'string'
            var convertToString = function (value) {
                return value + ''; // convert to string, so the next statements will process the value as a string
            };
            // Function which figures out, if the 'expected' value is found in the 'actual' value
            var valueFound = function (actual, expected) {
                expectedSplitted.forEach(function (expectedItem, index) {
                    if (actual.toLowerCase().indexOf(expectedItem) > -1) {
                        expectedSplitted[index] = ''; // expected has been found, initialize it now
                    }
                });
            };
            // Function to process an object
            var processObject = function (actual) {
                for (var actualProperty in actual) {
                    if (actual.hasOwnProperty(actualProperty)) {
                        var actualValue = actual[actualProperty];
                        if (typeof actual == 'number') {
                            actualValue = convertToString(actual);
                        }
                        if (typeof actualValue == 'string') {
                            if (actualValue.indexOf('object:') > -1) {
                                continue;
                            }
                            valueFound(actualValue, expected);
                        }
                    }
                    else {
                        // Process inherited properties
                        processObject(actual[actualProperty]);
                    }
                }
            };
            //#endregion
            //#region Initialize
            // Prepare 'expected' value
            expected = expected.toLowerCase();
            // Split the search string into its parts if separated by blanks
            var expectedSplitted = expected.split(' ');
            //#endregion
            //#region Process depending on type
            // Process property, typeof 'object'
            if (typeof actual == 'object') {
                processObject(actual);
            }
            // Process property, typeof 'number'
            if (typeof actual == 'number') {
                actual = convertToString(actual);
            }
            // Process property, typeof 'string'
            if (typeof actual == 'string') {
                valueFound(actual, expected);
            }
            //#endregion
            //#region Verify if all expected has been found
            var foundCount = 0;
            expectedSplitted.forEach(function (expectedItem) {
                if (expectedItem === '') {
                    foundCount++;
                }
            });
            //#endregion
            //#region Return result
            if (foundCount === expectedSplitted.length) {
                return true;
            }
            else {
                return false;
            }
            ;
            //#endregion
        };
        //#endregion
        //#region OBSOLETE
        /** Obsolete */
        BladeList.prototype.setObsoleteLayoutProperites = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.setObsoleteLayoutProperites\' called.', [this]);
            if (this.items.length !== 0) {
                this.blade.navGrid.items = this.items; //--> needed, otherwise nav html pages will no longer work.
            }
            this.blade.isNavGrid = this.isNavGrid;
            _super.prototype.setObsoleteLayoutProperites.call(this);
        };
        return BladeList;
    })(AzurePortalNg.BladeData);
    AzurePortalNg.BladeList = BladeList;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=BladeList.js.map