import * as azureportalng from 'azureportalng';

export class TileSize {

    //#region Constructors

    constructor(public tileSizes: azureportalng.TileSizes, public width: number, public height: number) {
        azureportalng.Debug.write('[azureportalng-debug] \'TileSize\' constructor called.', [this, tileSizes, width, height]);
    }

    //#endregion

    //#region Methods

    static getTileSizes(): Array<TileSize> {
        azureportalng.Debug.write('[azureportalng-debug] \'TileSize.getTileSizes\' called.', [this]);
        var tileSizes = Array<TileSize>();

        tileSizes.push(new TileSize(azureportalng.TileSizes.small, 90, 90));
        tileSizes.push(new TileSize(azureportalng.TileSizes.mini, 180, 90));
        tileSizes.push(new TileSize(azureportalng.TileSizes.normal, 180, 180));
        tileSizes.push(new TileSize(azureportalng.TileSizes.herowide, 540, 360));

        return tileSizes;
    }

    //#endregion
}

