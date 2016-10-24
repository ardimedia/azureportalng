namespace AzurePortalNg {
    'use strict';

    //#region Class Definition: BladeList

    export class BladeList extends BladeData {

        //#region Properties

        items: any[] = [];

        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList\' constructor called.', [this, portalService, path, title, subtitle, width]);

            this.isCommandNew = true;
            this.commandNewText = 'neu';
        }

        //#endregion

        //#region Methods

        activate(): void {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.activate\' called.', [this]);
            var that = this;

            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';

            var onActivate = that.onActivate();

            if (onActivate === null || onActivate === undefined) {
            } else {
                that.loadItems(onActivate);
                //onActivate.success(function (data: any) {
                //    that.items = data;
                //    that.statusbar = '';
                //    that.statusbarClass = '';
                //}).error(function (data: any, status: any, headers: any, config: any) {
                //    that.statusbar = 'FEHLER: ' + data;
                //    that.statusbarClass = 'message-info message-off';
                //});
            }
        }

        onActivate(): any { // any should be: angular.IHttpPromise<any>
            throw new Error('[azureportalng.BladeList] \'onActivate\' is an abstract function. Define one in the derived class.');
        }

        loadItems(f: any): void { // any should be: angular.IHttpPromise<any>
            var that = this;
            f.success(function (data: any) {
                that.items = data;
                that.statusbar = '';
                that.statusbarClass = '';
            }).error(function (data: any, status: any, headers: any, config: any) {
                that.statusbar = 'FEHLER: ' + data;
                that.statusbarClass = 'message-info message-off';
            });
        }

        //#region Filter

        onFilter(actual: Object, expected: string): boolean {
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
            var convertToString = function (value: number): string {
                return value + '';   // convert to string, so the next statements will process the value as a string
            };

            // Function which figures out, if the 'expected' value is found in the 'actual' value
            var valueFound = function (actual: string, expected: string): void {

                expectedSplitted.forEach(function (expectedItem, index): void {
                    if (actual.toLowerCase().indexOf(expectedItem) > -1) {
                        expectedSplitted[index] = '';  // expected has been found, initialize it now
                    }
                });
            };

            // Function to process an object
            var processObject = function (actual: Object): void {
                for (var actualProperty in actual) {
                    if (actual.hasOwnProperty(actualProperty)) {
                        var actualValue = actual[actualProperty];

                        if (typeof actual == 'number') {
                            actualValue = convertToString(<number>actual);
                        }

                        if (typeof actualValue == 'string') {
                            if (actualValue.indexOf('object:') > -1) { continue; }
                            valueFound(actualValue, expected);
                        }
                    } else {
                        // Process inherited properties
                        processObject(actual[actualProperty]);
                    }
                }
            }

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
                actual = convertToString(<number>actual);
            }

            // Process property, typeof 'string'
            if (typeof actual == 'string') {
                valueFound(<string>actual, expected);
            }

            //#endregion

            //#region Verify if all expected has been found

            var foundCount = 0;

            expectedSplitted.forEach(function (expectedItem): void {
                if (expectedItem === '') {  // all expectedSplitted.items which have been found, are initialized to '' (see above)
                    foundCount++;
                }
            });

            //#endregion

            //#region Return result

            if (foundCount === expectedSplitted.length) {
                return true;
            } else {
                return false;
            };

            //#endregion
        }

        //#endregion

        //#region OBSOLETE

        /** Obsolete */
        setObsoleteLayoutProperites() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.setObsoleteLayoutProperites\' called.', [this]);

            if (this.items.length !== 0) {
                this.blade.navGrid.items = this.items; //--> needed, otherwise nav html pages will no longer work.
            }

            this.blade.isNavGrid = this.isNavGrid;

            super.setObsoleteLayoutProperites();
        }

        //#endregion

        //#endregion
    }

    //#endregion
}
