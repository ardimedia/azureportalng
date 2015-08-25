module SampleTS {
    'use strict';

    //#region Class Definition

    class List1 extends AzurePortalNg.BladeList {

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/SampleTS/list1/list1.html', 'List-1', 'TypeScript based', 315);

            //this.isCommandNew = true;
            //this.commandNewText = 'Detail-1';

            this.statusbar = 'List-1...';

            this.activate();
        }

        //#endregion

        //#region Methods - Overrides for Blade

        onCommandNew(): void {
            AzurePortalNg.Debug.write('[sampleTS-debug] \'List1.onCommandNew\' called.', [this]);
            this.portalService.bladeArea.addBlade('/SampleTS/detail1/detail1.html', this.path);
        }

        onNavigateTo(id: string) {
            AzurePortalNg.Debug.write('[sampleTS-debug] \'List1.onNavigateTo\' called.', [this, id]);
            this.portalService.bladeArea.parameter.id = id;
            this.portalService.bladeArea.addBlade('/SampleTS/detail1/detail1.html', this.blade.path);
            this.portalService.$rootScope.$broadcast('bladeService.parameter', this.portalService.bladeArea.parameter);
        }

        //#endregion

        //#region Data Access

        protected onGetDataList(): angular.IHttpPromise<any> {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'List1.onGetDataList\' called.', [this]);
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sampleapp').controller('list1', ['azurePortalNg.portalService', List1]);
    })();

    //#endregion
}