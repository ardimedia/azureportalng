//#region Make sure console.log is working in any case, even IE9

if ($('html').hasClass('k-ie9')) {
    if (typeof console !== 'object') window.console = <any>{};
    if (typeof console.log !== 'object') window.console.log = function () { };
}

//#endregion

module AzurePortalNg {
    'use strict';

    //#region Class Definition: Debug

    export class Debug {

        //#region Properties

        static isEnabled: boolean = false;
        static isWithObjects: boolean = false;

        static keys: Array<string> = new Array<string>();

        //#endregion

        //#region Constructors

        constructor() {
        }

        //#endregion

        //#region Methods

        static enable(key?: string) {
            Debug.isEnabled = true;

            if (key) {
                Debug.keys.push(key);
            }
        }

        static disable(key?: string) {
            if (key) {
                var indexToDelete = Debug.keys.indexOf(key);
                Debug.keys.splice(indexToDelete, 1);
            }

            if (Debug.keys.length === 0) {
                Debug.isEnabled = false;
            }
        }

        static write(text: string, objects?: Array<any>) {
            if (Debug.isEnabled) {
                console.log(text);

                if (objects !== undefined && Debug.isWithObjects) {
                    objects.forEach(function (item) {
                        console.log(item);
                    });
                }
            }
        }

        /** Extract the key (e.g. [azureportal] from a string */
        static extractKey(text: string): string {
            var extractKey: string = '';

            var firstCharacter: string = text.substring(0, 1);
            if (firstCharacter === '[') {
                // Find closing bracket
                var closingPos: number = text.indexOf(']');

                if (closingPos > 0) {
                    extractKey = text.substring(0, closingPos + 1);
                }
            }

            return extractKey;
        }

        //#endregion
    }

    //#endregion

}