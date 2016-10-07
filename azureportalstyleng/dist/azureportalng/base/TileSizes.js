"use strict";
/** The names are used in CSS for layouting, e.g. style='mini' */
(function (TileSizes) {
    TileSizes[TileSizes["small"] = 0] = "small";
    TileSizes[TileSizes["mini"] = 1] = "mini";
    TileSizes[TileSizes["normal"] = 2] = "normal";
    TileSizes[TileSizes["herowide"] = 3] = "herowide";
})(exports.TileSizes || (exports.TileSizes = {}));
var TileSizes = exports.TileSizes;
