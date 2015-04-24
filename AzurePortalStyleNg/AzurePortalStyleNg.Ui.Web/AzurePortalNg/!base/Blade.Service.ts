module AzurePortalNg {
    'use strict';

    //#region Interfaces

    export interface IParameter {
        action: string; // selected, new
        id?: number;
    }

    export interface IBlade {
        blade: any;
        parameter: AzurePortalNg.IParameter;
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
        isVisible: boolean = false;
        isEnabled: boolean = false;
        text: string = '';
    }

    //#endregion

    //#region Class Definition: BladeService

    export class BladeService {

        //#region Properties

        bladeUrls: Array<Blade> = new Array<Blade>();

        private portalService: PortalService;

        //#endregion

        //#region Constructors

        constructor(portalService: PortalService) {
            this.portalService = portalService;
            this.portalService.bladeService = this;
        }

        //#endregion

        //#region Methods

        setFirstBlade(path: string): Blade {
            this.clearAll();
            return this.addBlade('', path);
        }

        addBlade(senderPath: string, path: string): Blade {
            var that = this;
            if (path === undefined || path === '') { return; }
            if (that.portalService.$window.document === undefined) {
                throw new Error('[azureportalng] [this.$window.document] undefined.');
            }
            var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
            if (portalcontent === null) {
                throw new Error('[azureportalng] HTML eLement with ID [azureportalscroll] not found. Maybe it is to early to call function [addBladePath].');
            }

            this.clearChild(senderPath);

            this.bladeUrls.forEach(function (blade) {
                if (blade.path === path) {
                    throw new Error('[azureportalng] path: \'' + path + '\' could not be added. It is allready add.');
                };
            });

            var blade = new Blade(that.portalService, path);
            that.bladeUrls.push(blade);


            that.portalService.$window.setTimeout(function () {
                var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');

                var i = that.bladeUrls.length - 1;

                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                //if (azureportalblades[i] !== undefined && azureportalblades[i].offsetLeft !== undefined) {
                //    var sl = azureportalblades[i].offsetLeft - 30;
                //    portalcontent.scrollLeft = sl;
                //}
            }, 250);

            return blade;
        }

        clearAll(): void {
            this.bladeUrls.length = 0;
        }

        clear(path: string): void {
            var that = this;
            that.bladeUrls.forEach(function (blade, index) {
                if (blade.path === path) {
                    that.bladeUrls.length = index;
                    return;
                }
            });
            throw new Error('[azureportalng] path: \'' + path + '\' could not be removed, since it is not shown.');
        }

        protected clearChild(path: string): void {
            var that = this;
            that.bladeUrls.forEach(function (blade, index) {
                if (blade.path === path) {
                    that.bladeUrls.length = index + 1;
                    return;
                }
            });
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('azureportalng').service('azurePortalNg.bladeService', ['$window', AzurePortalNg.BladeService]);
    })();

    //#endregion

}
