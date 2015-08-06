var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
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
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList\' constructor called.', [this, portalService, path, title, subtitle, width]);
        }
        //#endregion
        //#region Methods
        BladeList.prototype.onActivate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.onActivate\' called.', [this]);
            return _super.prototype.getDataList.call(this);
        };
        BladeList.prototype.onFilter = function (actual, expected) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.filter\' called.', [this, actual, expected]);
            //console.log(actual);
            //console.log(expected);
            // TESTING:
            // There is a Unit Test available in: BladeListTest.html
            // Implemenation detail:
            // > onFilter will be called for each item in an array
            // > If the item is an native type (string, number), the filter will be called with the native type in the parameter 'actual'
            // > If the item is an object, the filter will be called with each property of the object in the parameter 'actual'
            // > If the item is an object, the filter will also be called with the object in the parameter 'actual'
            //#region Functions
            // Implemenation detail:
            // > We must implement the functions in code, since onFilter is not called within the scope of this class (this. not working).
            // Function to convert 'number' to 'string'
            var convertToString = function (value) {
                return value + ''; // convert to string, so the next statements will process the value as a string
            };
            // Function which figures out, if the 'expected' value is found in the 'actual' value
            var valueFound = function (actual, expected) {
                //var foundCounter = 0;
                expectedSplitted.forEach(function (expectedItem, index) {
                    if (actual.toLowerCase().indexOf(expectedItem) > -1) {
                        //console.log('value \'' + expectedItem + '\' found in \'' + actual + '\'');
                        expectedSplitted[index] = ''; // expected has been found, initialize it now
                    }
                    else {
                    }
                });
                //return foundCounter;
            };
            // Function to process an object
            var processObject = function (actual) {
                var foundCounter = 0;
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
                            if (valueFound(actualValue, expected)) {
                                foundCounter++;
                            }
                        }
                    }
                    else {
                        // Process inherited properties
                        foundCounter = foundCounter + processObject(actual[actualProperty]);
                    }
                }
                //console.log('counter: ' + foundCounter);
                return foundCounter;
            };
            //#endregion
            // Prepare 'expected' value
            expected = expected.toLowerCase();
            // If the number of items in expectedSplitted is the same as the foundCounter,
            // all searched words have been found in the object
            var expectedSplitted = expected.split(' '); // Split the search string into its parts if separated by blanks
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
            // Verify if all expected  has been found
            var allFound = true;
            var count = 0;
            expectedSplitted.forEach(function (expectedItem) {
                if (expectedItem === '') {
                    //console.log('expectedItem is empty');
                    count++;
                }
                else {
                }
            });
            //console.log('coutn: ' + count + ' | expectedSplitted.length: ' + expectedSplitted.length);
            if (count === expectedSplitted.length) {
                //console.log('true');
                return true;
            }
            else {
                //console.log('false');
                return false;
            }
            ;
        };
        return BladeList;
    })(AzurePortalNg.BladeData);
    AzurePortalNg.BladeList = BladeList;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=BladeList.js.map