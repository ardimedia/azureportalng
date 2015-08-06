describe('AzurePortalNg.Debug', function () {
    beforeEach(function () {
        AzurePortalNg.Debug.isEnabled = false;
        AzurePortalNg.Debug.isWithObjects = false;
        AzurePortalNg.Debug.keys = new Array();
    });
    //#region Specs for Debug initialization
    it(".isEnabled must be initialized to false", function () {
        var sut = AzurePortalNg.Debug;
        expect(false).toBe(sut.isEnabled);
    });
    it(".isWithObjects must be initialized to false", function () {
        var sut = AzurePortalNg.Debug;
        expect(false).toBe(sut.isWithObjects);
    });
    it(".keys must initialize to an array", function () {
        var sut = AzurePortalNg.Debug;
        expect(typeof []).toBe(typeof sut.keys);
    });
    it(".keys must initialize to an empty array", function () {
        var sut = AzurePortalNg.Debug;
        expect(true).toBe(sut.keys.length === 0);
    });
    //#endregion
    //#region Spes for Debug functions
    //#region Function: extractKey
    it(".extractKey('[key1] abc') must return [key1]", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('[key1] abc');
        expect('[key1]').toBe(result);
    });
    it(".extractKey('') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('');
        expect('').toBe(result);
    });
    it(".extractKey(' [key1] abc') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey(' [key1] abc');
        expect('').toBe(result);
    });
    it(".extractKey('[key1 abc') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('[key1 abc');
        expect('').toBe(result);
    });
    it(".extractKey('key1] abc') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('key1] abc');
        expect('').toBe(result);
    });
    //#endregion
    //#region Function: enable
    it(".enable('') must enable debugging with no keys", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        expect(true).toBe(sut.isEnabled);
        expect(0).toBe(sut.keys.length);
    });
    it(".enable('[key1]') must enable debugging with key = '[key1]'", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        expect(true).toBe(sut.isEnabled);
        expect(1).toBe(sut.keys.length);
        expect(sut.keys[0]).toBe('[key1]');
    });
    it(".enable('[key1]') must enable debugging with key = '[key1]' and .enable('[key2]')", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.enable('[key2]');
        expect(true).toBe(sut.isEnabled);
        expect(2).toBe(sut.keys.length);
        expect(sut.keys[0]).toBe('[key1]');
        expect(sut.keys[1]).toBe('[key2]');
    });
    //#endregion
    //#region Function: disable
    it(".disable('') must disable debugging. No more keys are defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.disable('');
        expect(false).toBe(sut.isEnabled);
        expect(0).toBe(sut.keys.length);
    });
    it(".disable('') must not disable debugging. Some keys are still defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.enable('[key1]');
        sut.disable('');
        expect(true).toBe(sut.isEnabled);
        expect(1).toBe(sut.keys.length);
    });
    it(".disable('[key1]') must disable debugging and remove key = '[key1]'. No more keys are defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.disable('[key1]');
        expect(false).toBe(sut.isEnabled);
        expect(0).toBe(sut.keys.length);
    });
    it(".disable('[key1]') must not disable debugging but remove key = '[key1]'. Some keys are still defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.enable('[key2]');
        sut.disable('[key1]');
        expect(true).toBe(sut.isEnabled);
        expect(1).toBe(sut.keys.length);
    });
    //#endregion
    //#endregion
});
