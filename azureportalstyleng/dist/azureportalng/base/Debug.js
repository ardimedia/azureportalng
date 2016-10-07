"use strict";
var Debug = (function () {
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
    Debug.write = function (debugLine, objects) {
        if ((Debug.isEnabled && Debug.keys.length === 0)
            || (Debug.isEnabled && Debug.isInKeys(debugLine))) {
            console.log(debugLine);
            if (objects !== undefined && Debug.isWithObjects) {
                objects.forEach(function (item) {
                    console.log(item);
                });
            }
            return true;
        }
        return false;
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
    /** Extract the key (e.g. [azureportal] from a string */
    Debug.isInKeys = function (debugLine) {
        var key = Debug.extractKey(debugLine);
        if (Debug.keys.indexOf(key) != -1) {
            return true;
        }
        return false;
    };
    //#region Properties
    Debug.isEnabled = false;
    Debug.isWithObjects = false;
    Debug.keys = new Array();
    return Debug;
}());
exports.Debug = Debug;
