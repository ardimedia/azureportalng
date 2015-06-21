module AzurePortalNg {
    'use strict';

    //#region Interface Defintions

    /** Obsolete? Check if needed... */
    export interface IParameter {
        action: string; // selected, new
        id?: number;
    }

    export interface IBlade {
        blade: any;
        parameter: AzurePortalNg.IParameter;
    }

    export interface IBladeParameter {
        action: string;
        id: number|string;
    }

    export interface IBlade$Scope extends angular.IScope {
        formblade: any;
    }

    //#endregion

    //#region Enum Definition: BladeCommands

    export enum BladeCommands {
        Cancel,
        Delete,
        New,
        Save
    }

    //#endregion

    //#region Class Definition: BladeCommand

    export class BladeCommand {

        //#region Properties

        bladeUrls: Array<Blade> = new Array<Blade>();

        isVisible: boolean = false;
        isEnabled: boolean = false;
        text: string = '';

        //#endregion
    }

    //#endregion

    //#region Class Definition: BladeArea (could also be named: journey)

    export class BladeArea extends UserControlBase {

        //#region Properties

        blades: Array<AzurePortalNg.Blade> = new Array<AzurePortalNg.Blade>();

        parameter: AzurePortalNg.IBladeParameter;

        //#endregion

        //#region Constructors

        constructor(portalService: PortalService) {
            super(portalService);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea\' constructor called.', [this, portalService]);

            this.portalService = portalService;
            this.portalService.bladeArea = this;
        }

        //#endregion

        //#region Methods


        setFirstBlade(path: string): Blade {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.setFirstBlade\' called.', [this, path]);
            this.clearAll();
            return this.addBlade('', path);
        }

        addBlade(senderPath: string, path: string): Blade {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.addBlade\' called.', [this, senderPath, path]);
            var that = this;
            if (path === undefined || path === '') { return; }
            if (that.portalService.$window.document === undefined) {
                throw new Error('[azureportalng] [this.$window.document] undefined.');
            }
            var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
            if (portalcontent === null) {
                throw new Error('[azureportalng] HTML eLement with ID [azureportalscroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
            }

            this.clearChild(senderPath);

            this.blades.forEach(function (blade) {
                if (blade.path === path) {
                    throw new Error('[azureportalng] path: \'' + path + '\' could not be added. It is allready add.');
                };
            });

            var blade = new Blade(that.portalService, path);
            that.blades.push(blade);

            that.portalService.$window.setTimeout(function () {
                var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');

                var i = that.blades.length - 1;

                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                if (azureportalblades[i] !== undefined && (<any>azureportalblades[i]).offsetLeft !== undefined) {
                    var sl = (<any>azureportalblades[i]).offsetLeft - 30;
                    portalcontent.scrollLeft = sl;
                }
            }, 250);

            return blade;
        }

        clearAll(): void {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearAll\' called.', [this]);
            this.blades.length = 0;
        }

        clearPath(path: string): void {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearPath\' called.', [this, path]);
            var that = this;
            var isremoved = that.blades.some(function (blade, index) {
                if (blade.path === path) {
                    AzurePortalNg.Debug.write('>>> set bladeUrls.length to: ' + index);
                    that.blades.length = index;
                    return true;
                }
            });
            if (!isremoved) {
                AzurePortalNg.Debug.write('>>> bladeUrls:', [that.blades]);
                throw new Error('[azureportalng] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
        }

        clearLevel(level: number) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearLevel\' called.', [this, level]);
            if (level == 0) { level = 1; }
            this.blades.length = level - 1;
        }

        clearLastLevel() {
            this.clearLevel(this.blades.length);
        }

        protected clearChild(path: string): void {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.clearChild\' called.', [this, path]);
            var that = this;

            if (path === '') {
                AzurePortalNg.Debug.write('>>> path is empty, nothing to clear.');
                return;
            }
            var isremoved = that.blades.some(function (blade, index) {
                if (blade.path === path) {
                    AzurePortalNg.Debug.write('>>> set bladeUrls.length to: ' + (index + 1));
                    that.blades.length = index + 1;
                    return true;
                }
            });
            if (!isremoved) {
                AzurePortalNg.Debug.write('>>> bladeUrls:', [that.blades]);
                throw new Error('[azureportalng] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
        }

        //#endregion

        //#region OBSOLETE

        addBladePath(path: string) {
            // Fix issue with old code
            if (this.portalService.$window === undefined) {
                this.portalService.$window = <any>this.portalService;
            }
            this.addBladeOld(path);
        }

        addBladeOld(path: string) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeArea.addBladeOld\' called.', [this, path]);
            var that = this;
            if (path === undefined || path == '') { return; }

            var blade = new Blade(that.portalService, path);
            that.blades.push(blade);

            var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
            that.portalService.$window.setTimeout(function () {
                var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');

                var i = that.blades.length - 1;

                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                if (azureportalblades[i] !== undefined && (<any>azureportalblades[i]).offsetLeft !== undefined) {
                    var sl = (<any>azureportalblades[i]).offsetLeft - 30;
                    portalcontent.scrollLeft = sl;
                }
            }, 250);
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('azureportalng').service('azurePortalNg.bladeArea', ['$window', AzurePortalNg.BladeArea]);
    })();

    /** OBSOLETE */
    (function () {
        'use strict';
        angular.module('azureportalng').service('bladeService', ['$window', AzurePortalNg.BladeArea]);
    })();

    //#endregion
}
