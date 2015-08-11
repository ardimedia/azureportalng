describe('AzurePortalNg.Blade', function () {
    beforeEach(function () {
    });
    //#region Specs for Constructor
    it("Constructor successful", function () {
        var portalService = azurePortalNg.service('azurePortalNg.portalService');
        var sut = new AzurePortalNg.Blade(portalService, 'test-path', 'test-title');
        expect(sut).not.toBe(null);
        expect(sut.blade).not.toBe(null);
        expect(sut.blade.title).toBe('test-title');
        expect(sut.blade.subTitle).toBe('');
        expect(sut.navGrid).not.toBe(null);
        expect(sut.navGrid.portalService).not.toBe(null);
        expect(sut.navGrid.items).not.toBe(null);
        expect(sut.navGrid.items.length).toBe(0);
        expect(sut.navGrid.navigateTo).not.toBe(null);
        expect(sut.path).not.toBe(null);
        expect(sut.title).toBe('test-title');
        expect(sut.subTitle).toBe('');
        expect(sut.width.width).toBe('200px');
        expect(sut.widthStackLayout.width).toBe('150px');
        expect(sut.isInnerHtml).toBe(true);
        expect(sut.statusbar).toBe('');
        expect(sut.statusbarClass).toBe('');
        expect(sut.searchString).toBe('');
        expect(sut.isCommandBrowse).toBe(false);
        expect(sut.isCommandCancel).toBe(false);
        expect(sut.isCommandCopy).toBe(false);
        expect(sut.isCommandDelete).toBe(false);
        expect(sut.isCommandDocument).toBe(false);
        expect(sut.isCommandDocument2).toBe(false);
        expect(sut.isCommandDocument3).toBe(false);
        expect(sut.isCommandDocument4).toBe(false);
        expect(sut.isCommandDocument5).toBe(false);
        expect(sut.isCommandNew).toBe(false);
        expect(sut.isCommandOrder).toBe(false);
        expect(sut.isCommandRestart).toBe(false);
        expect(sut.isCommandSave).toBe(false);
        expect(sut.isCommandSearch).toBe(false);
        expect(sut.isCommandStart).toBe(false);
        expect(sut.isCommandStop).toBe(false);
        expect(sut.isCommandSwap).toBe(false);
        expect(sut.commandBrowse).not.toBe(null);
        expect(sut.commandCancel).not.toBe(null);
        expect(sut.commandCopy).not.toBe(null);
        expect(sut.commandDelete).not.toBe(null);
        expect(sut.commandDocument).not.toBe(null);
        expect(sut.commandDocument2).not.toBe(null);
        expect(sut.commandDocument3).not.toBe(null);
        expect(sut.commandDocument4).not.toBe(null);
        expect(sut.commandDocument5).not.toBe(null);
        expect(sut.commandNew).not.toBe(null);
        expect(sut.commandOrder).not.toBe(null);
        expect(sut.commandRestart).not.toBe(null);
        expect(sut.commandSave).not.toBe(null);
        expect(sut.commandSearch).not.toBe(null);
        expect(sut.commandStart).not.toBe(null);
        expect(sut.commandStop).not.toBe(null);
        expect(sut.commandSwap).not.toBe(null);
        expect(sut.commandBrowseText).toBe('');
        expect(sut.commandCancelText).toBe('');
        expect(sut.commandCopyText).toBe('');
        expect(sut.commandDeleteText).toBe('');
        expect(sut.commandDocumentText).toBe('');
        expect(sut.commandDocument2Text).toBe('');
        expect(sut.commandDocument3Text).toBe('');
        expect(sut.commandDocument4Text).toBe('');
        expect(sut.commandDocument5Text).toBe('');
        expect(sut.commandNewText).toBe('');
        expect(sut.commandOrderText).toBe('');
        expect(sut.commandRestartText).toBe('');
        expect(sut.commandSaveText).toBe('');
        expect(sut.commandSearchText).toBe('');
        expect(sut.commandStartText).toBe('');
        expect(sut.commandStopText).toBe('');
        expect(sut.commandSwapText).toBe('');
    });
    it("Constructor with parameter [width = 300] successful", function () {
        var portalService = azurePortalNg.service('azurePortalNg.portalService');
        var sut = new AzurePortalNg.Blade(portalService, 'test-path', '', '', 300);
        // widthStackLayout must be 50 less then provided [width]
        expect(sut.widthStackLayout.width).toBe('250px');
    });
    it("Constructor with parameter [width => 50] throws no expection", function () {
        var portalService = azurePortalNg.service('azurePortalNg.portalService');
        var sut = new AzurePortalNg.Blade(portalService, 'test-path', '', '', 50);
        expect(sut).not.toBe(null);
    });
    it("Constructor with parameter [width < 50] throws expection", function () {
        var portalService = azurePortalNg.service('azurePortalNg.portalService');
        var sut = function () { new AzurePortalNg.Blade(portalService, 'test-path', '', '', 49); };
        expect(sut).toThrow();
    });
    //#endregion
    //#region Specs for Functions
    //#region activate
    it("activate - no specs yet", function () {
        var portalService = azurePortalNg.service('azurePortalNg.portalService');
        var sut = new AzurePortalNg.BladeData(portalService, 'test-path', 'test-title');
        sut.activate();
        expect(sut).not.toBe(null);
    });
    //#endregion
    //#region navigateTo
    it("navigateTo throws expection", function () {
        var portalService = azurePortalNg.service('azurePortalNg.portalService');
        var sut = new AzurePortalNg.Blade(portalService, 'test-path', 'test-title');
        var exception = function () { sut.navigateTo('test-path'); };
        expect(exception).toThrow();
    });
    //#endregion
    //#region bladeClose
    it("bladeClose - no specs yet", function () {
        var portalService = azurePortalNg.service('azurePortalNg.portalService');
        var sut = new AzurePortalNg.BladeData(portalService, 'test-path', 'test-title');
        sut.bladeClose();
        expect(sut).not.toBe(null);
    });
    //#endregion
    //#endregion
});
//# sourceMappingURL=BladeTest - Copy.js.map