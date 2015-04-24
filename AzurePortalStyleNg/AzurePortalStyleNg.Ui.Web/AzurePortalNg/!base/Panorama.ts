module AzurePortalNg {
    'use strict';

    //#region Class Definition: Panorama

    export class Panorama {

        //#region Properties

        title: string;

        avatarMenu: AvatarMenu;
        startboard: Startboard;

        //#endregion

        //#region Constructors

        constructor(title: string) {
            this.title = title;

            this.avatarMenu = new AvatarMenu();
            this.startboard = new Startboard();
        }

        //#endregion

        //#region Methods
        //#endregion
    }

    //#endregion

}