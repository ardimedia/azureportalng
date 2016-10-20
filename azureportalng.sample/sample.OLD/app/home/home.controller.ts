import * as azureportalng from 'azureportalng';

export default class HomeController extends azureportalng.PortalShell {
    constructor(portalService: azureportalng.PortalService, ammsadminDataService: any) {
        super('my.bvd.li', portalService)
        console.log('HomeController constructor');
        this.name = 'World';
    }

    name: string;

    changeName() {
        this.name = 'angular-tips';
    }
}