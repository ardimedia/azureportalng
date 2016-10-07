import * as azureportalng from 'azureportalng';

export default class ShellController {
    constructor() {
        console.log('ShellController');
        this.vm.portalService = new azureportalng.PortalService(null);
        this.vm.portalService.panorama.isVisible = true;
        this.vm.title = 'Jabba';
    }

    vm: {
        portalService: {
            panorama: {
                isVisible: boolean;
            }
        },
        title: string
    };
}
