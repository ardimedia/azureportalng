module AzurePortalNg {
    'use strict';

    //#region Class Definition: BladeList

    export class BladeList extends BladeData {

        //#region Properties

        //filterFor: string;

        private _filterFor: string;

        get filterFor(): string {
            return this._filterFor;
        }


        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList\' constructor called.', [this, portalService, path, title, subtitle, width]);
        }

        //#endregion

        //#region Methods

        onActivate(): angular.IHttpPromise<any> {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.onActivate\' called.', [this]);

            return super.getDataList()
        }

        onFilter(actual: Object, expected: string): boolean {
            this._filterFor = expected;

            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.filter\' called.', [this, actual, expected]);

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
            var convertToString = function (value: number): string {
                return value + '';   // convert to string, so the next statements will process the value as a string
            };

            // Function which figures out, if the 'expected' value is found in the 'actual' value
            var valueFound = function (actual: string, expected: string): void {
                //var foundCounter = 0;

                expectedSplitted.forEach(function (expectedItem, index): void {
                    if (actual.toLowerCase().indexOf(expectedItem) > -1) {
                        //console.log('value \'' + expectedItem + '\' found in \'' + actual + '\'');
                        expectedSplitted[index] = '';  // expected has been found, initialize it now
                    } else {
                        //console.log('value \'' + expectedItem + '\' not found in \'' + actual + '\'');
                    }
                });

                //return foundCounter;
            };

            // Function to process an object
            var processObject = function (actual: Object): number {
                var foundCounter = 0;

                for (var actualProperty in actual) {
                    if (actual.hasOwnProperty(actualProperty)) {
                        var actualValue = actual[actualProperty];

                        if (typeof actual == 'number') {
                            actualValue = convertToString(<number>actual);
                        }

                        if (typeof actualValue == 'string') {
                            if (actualValue.indexOf('object:') > -1) { continue; }
                            if (valueFound(actualValue, expected)) {
                                foundCounter++;
                                //console.log('counter added 1: ' + foundCounter + ' ' + actualProperty + ' ' + actualValue);
                            }
                        }
                    } else {
                        // Process inherited properties
                        foundCounter = foundCounter + processObject(actual[actualProperty]);
                        //console.log('counter added 2: ' + foundCounter);
                    }
                }

                //console.log('counter: ' + foundCounter);
                return foundCounter;
            }

            //#endregion

            // Prepare 'expected' value
            expected = expected.toLowerCase();

            // If the number of items in expectedSplitted is the same as the foundCounter,
            // all searched words have been found in the object
            var expectedSplitted = expected.split(' ');  // Split the search string into its parts if separated by blanks

            // Process property, typeof 'object'
            if (typeof actual == 'object') {
                processObject(actual);
            }

            // Process property, typeof 'number'
            if (typeof actual == 'number') {
                actual = convertToString(<number>actual);
            }

            // Process property, typeof 'string'
            if (typeof actual == 'string') {
                valueFound(<string>actual, expected);
            }

            // Verify if all expected  has been found
            var allFound = true;
            var count = 0;

            expectedSplitted.forEach(function (expectedItem): void {
                if (expectedItem === '') {
                    //console.log('expectedItem is empty');
                    count++;
                } else {
                    //console.log('expectedItem not found: ' + expectedItem);
                }
            });

            //console.log('coutn: ' + count + ' | expectedSplitted.length: ' + expectedSplitted.length);
            if (count === expectedSplitted.length) {
                //console.log('true');
                return true;
            } else {
                //console.log('false');
                return false;
            };
        }

        onNavigateTo(path: string) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.onNavigateTo\' called.', [this, path]);
            this.portalService.bladeArea.addBlade(path, this.blade.path);
        }

        //#endregion
    }

    //#endregion
}
