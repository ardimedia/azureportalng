describe('AzurePortalNg.Debug', function () {

    beforeEach(function () {
        Debug.isEnabled = false;
        Debug.isWithObjects = false;
        Debug.keys = new Array<string>();
    });

    //#region Specs for Constructor

    it("Constructor successful.", function () {
        var sut = AzurePortalNg.Debug;

        expect(sut.isEnabled).toBe(false);
        expect(sut.isWithObjects).toBe(false);
        expect(typeof sut.keys).toBe(typeof []);
        expect(sut.keys.length).toBe(0);
    });

    //#endregion

    //#region Spes for Functions

    //#region Function: extractKey

    it("extractKey('[key1] abc') must return [key1]", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('[key1] abc');

        expect(result).toBe('[key1]');
    });

    it("extractKey('') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('');

        expect(result).toBe('');
    });

    it("extractKey(' [key1] abc') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey(' [key1] abc');

        expect(result).toBe('');
    });

    it("extractKey('[key1 abc') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('[key1 abc');

        expect(result).toBe('');
    });

    it("extractKey('key1] abc') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('key1] abc');

        expect(result).toBe('');
    });

    //#endregion

    //#region Function: enable

    it("enable('') must enable debugging with no keys", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');

        expect(sut.isEnabled).toBe(true);
        expect(sut.keys.length).toBe(0);
    });

    it("enable('[key1]') must enable debugging with key = '[key1]'", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');

        expect(sut.isEnabled).toBe(true);
        expect(sut.keys.length).toBe(1);
        expect(sut.keys[0]).toBe('[key1]');
    });

    it("enable('[key1]') must enable debugging with key = '[key1]' and .enable('[key2]')", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.enable('[key2]');

        expect(sut.isEnabled).toBe(true);
        expect(sut.keys.length).toBe(2);
        expect(sut.keys[0]).toBe('[key1]');
        expect(sut.keys[1]).toBe('[key2]');
    });

    //#endregion

    //#region Function: disable

    it("disable('') must disable debugging. No more keys are defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.disable('');

        expect(sut.isEnabled).toBe(false);
        expect(sut.keys.length).toBe(0);
    });

    it("disable('') must not disable debugging. Some keys are still defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.enable('[key1]');
        sut.disable('');

        expect(sut.isEnabled).toBe(true);
        expect(sut.keys.length).toBe(1);
    });

    it("disable('[key1]') must disable debugging and remove key = '[key1]'. No more keys are defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.disable('[key1]');

        expect(sut.isEnabled).toBe(false);
        expect(sut.keys.length).toBe(0);
    });

    it("disable('[key1]') must not disable debugging but remove key = '[key1]'. Some keys are still defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.enable('[key2]');
        sut.disable('[key1]');

        expect(sut.isEnabled).toBe(true);
        expect(sut.keys.length).toBe(1);
    });

    //#endregion

    //#region Function: isInKeys

    it("isInKeys('') will not be logged", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.disable('');
        var result = sut.isInKeys('');

        expect(result).toBe(false);
    });

    it("isInKeys('[key1]') will not be logged. No keys defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.disable('');
        var result = sut.isInKeys('[key1]');

        expect(result).toBe(false);
    });

    it("isInKeys('[key1]') will be logged. [key1] is defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.disable('');
        var result = sut.isInKeys('[key1]');

        expect(result).toBe(true);
    });

    //#endregion

    //#region Function: write

    it("write('') will not be logged in the console", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.disable('');
        var result = sut.write('');

        expect(result).toBe(false);
    });

    it("write('[key1] TestRunner test output') will be logged in the console", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.disable('');
        var result = sut.write('[key1] TestRunner test output successfull');

        expect(result).toBe(true);
    });

    //#endregion

    //#endregion
});