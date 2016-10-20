# azureportalng

**Azure Portal Angular(1)** ...or better **Angular(1) Portal - Azure style**

We are in the process to clean up this project and make it production ready.

There are may possibilities how this will all end, but our thoughts go into this direction:

- rename to **angular-portal-azure**
- remove the NuGet package
- implement a npm package
- lots of clean up
- bring more from the Azure style into this package

For now --- happy coding ;-)

## Compile

Run `npm run compile`

## Deploy

Run `build.bat` (on windows machine)

`dist\azureportalng` and `node_modules\azureportalng` do contain the same directories and files.   
`dist` can be used for distribution   
`node_modules` is used so that this projects compiles (tsc) correctly (we need `index.d.ts`)
