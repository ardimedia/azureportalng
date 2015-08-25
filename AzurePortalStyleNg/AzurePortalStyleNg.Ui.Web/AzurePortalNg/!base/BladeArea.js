var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#endregion
    //#region Class Definition: BladeArea
    var BladeArea = (function (_super) {
        __extends(BladeArea, _super);
        //#endregion
        //#region Constructors
        function BladeArea(portalService) {
            _super.call(this, portalService);
            this.blades = new Array();
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea\' constructor called.', [this, portalService]);
            var that = this;
            // Set dependencies
            this.portalService = portalService;
            this.portalService.bladeArea = this;
            //#region AddEventListeners
            this.listener1 = that.portalService.$rootScope.$on('BladeArea.AddBlade', function (event, parameter) {
                that.addBlade(parameter.path, parameter.pathSender);
            });
            //#endregion
        }
        //#endregion
        //#region Methods
        BladeArea.prototype.raiseAddBladeEvent = function (args) {
            this.portalService.$rootScope.$broadcast('BladeArea.AddBlade', args);
        };
        BladeArea.prototype.setFirstBlade = function (path) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.setFirstBlade\' called.', [this, path]);
            this.clearAll();
            this.hidePanorama();
            return this.addBlade(path);
        };
        /** obsolete */
        BladeArea.prototype.addBlade = function (path, senderPath) {
            if (senderPath === void 0) { senderPath = ''; }
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.addBlade\' called.', [this, senderPath, path]);
            var that = this;
            //#region Verify
            if (path === undefined || path === '') {
                return;
            }
            if (that.portalService.$window !== undefined) {
                if (that.portalService.$window.document === undefined) {
                    throw new Error('[AzurePortalNg.BladeArea] \'this.$window.document\' undefined.');
                }
                var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
                if (portalcontent === null) {
                    throw new Error('[AzurePortalNg.BladeArea] HTML element with ID [azureportalscroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
                }
            }
            //#endregion
            //#region Clear all children of the parent path
            this.clearChild(senderPath);
            //#endregion
            //#region Make sure the blade is not yet show
            this.blades.forEach(function (blade) {
                if (blade.path === path) {
                    throw new Error('[AzurePortalNg.BladeArea] path: \'' + path + '\' will not be added. It is already added.');
                }
                ;
            });
            //#endregion
            //#region Show the blade
            var blade = new AzurePortalNg.Blade(that.portalService, path, '');
            that.blades.push(blade);
            //#endregion
            //#region Position the blade
            if (that.portalService.$window !== undefined) {
                that.portalService.$window.setTimeout(function () {
                    var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');
                    var i = that.blades.length - 1;
                    // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                    //       So now if it is, the user has to scroll on its own.
                    if (azureportalblades[i] !== undefined && azureportalblades[i].offsetLeft !== undefined) {
                        var sl = azureportalblades[i].offsetLeft - 30;
                        portalcontent.scrollLeft = sl;
                    }
                }, 250);
            }
            //#endregion
            return blade;
        };
        BladeArea.prototype.clearAll = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearAll\' called.', [this]);
            this.blades.length = 0;
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearPath = function (path) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearPath\' called.', [this, path]);
            var that = this;
            var isremoved = that.blades.some(function (blade, index) {
                if (blade.path === path) {
                    AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearPath\' set bladeUrls.length to: ' + index);
                    that.blades.length = index;
                    return true;
                }
            });
            if (!isremoved) {
                AzurePortalNg.Debug.write('>>> bladeUrls:', [that.blades]);
                throw new Error('[AzurePortalNg.BladeArea.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearLevel = function (level) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearLevel\' called.', [this, level]);
            if (this.blades.length < level) {
            }
            if (level == 0) {
                level = 1;
            }
            this.blades.length = level - 1;
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearLastLevel = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearLastLevel\' called.', [this]);
            this.clearLevel(this.blades.length);
            this.showPanoramaIfNoBlades();
        };
        BladeArea.prototype.clearChild = function (path) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearChild\' called.', [this, path]);
            var that = this;
            if (path === '') {
                AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearChild\' path is empty, nothing to clear.');
                return;
            }
            var isremoved = that.blades.some(function (blade, index) {
                if (blade.path === path) {
                    AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearChild\' set bladeUrls.length to: ' + (index + 1));
                    that.blades.length = index + 1;
                    return true;
                }
            });
            if (!isremoved) {
                AzurePortalNg.Debug.write('>>> bladeUrls:', [that.blades]);
                throw new Error('[AzurePortalNg.BladeArea.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
        };
        BladeArea.prototype.showPanoramaIfNoBlades = function () {
            if (this.blades.length === 0) {
                if (this.portalService.panorama !== undefined) {
                    {
                        this.portalService.panorama.isVisible = true;
                    }
                }
            }
        };
        BladeArea.prototype.hidePanorama = function () {
            if (this.portalService.panorama !== undefined) {
                this.portalService.panorama.isVisible = false;
            }
        };
        //#endregion
        //#region OBSOLETE
        BladeArea.prototype.addBladePath = function (path) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.addBladePath\' called.', [this, path]);
            // Fix issue with old code
            if (this.portalService.$window === undefined) {
                this.portalService.$window = this.portalService;
            }
            this.addBlade(path);
            //this.addBladeOld(path);
        };
        BladeArea.prototype.addBladeOld = function (path) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.addBladeOld\' called.', [this, path]);
            var that = this;
            if (path === undefined || path == '') {
                return;
            }
            var blade = new AzurePortalNg.Blade(that.portalService, path, '');
            that.blades.push(blade);
            var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
            that.portalService.$window.setTimeout(function () {
                var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');
                var i = that.blades.length - 1;
                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                if (azureportalblades[i] !== undefined && azureportalblades[i].offsetLeft !== undefined) {
                    var sl = azureportalblades[i].offsetLeft - 30;
                    portalcontent.scrollLeft = sl;
                }
            }, 250);
        };
        return BladeArea;
    })(AzurePortalNg.UserControlBase);
    AzurePortalNg.BladeArea = BladeArea;
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('azureportalng').service('azurePortalNg.bladeArea', ['$window', AzurePortalNg.BladeArea]);
    })();
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=BladeArea.js.map