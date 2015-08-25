============================================================================================================
SOURCE
------------------------------------------------------------------------------------------------------------
https://github.com/iwhp/AzurePortalStyleNg
============================================================================================================

============================================================================================================
BUNDLE
------------------------------------------------------------------------------------------------------------
> bundleconfig.json
============================================================================================================

============================================================================================================
BOWER
------------------------------------------------------------------------------------------------------------
> bower.json contains all the modules which are controlled by bower
> .bowerrc (see under bower.json file - .bowerrc is a nested file)
============================================================================================================

============================================================================================================
TYPESCRIPT TYPINGS
------------------------------------------------------------------------------------------------------------
> Search typings
  > tsd query * | find "angular"
> Install typings
  > tsd install angular-resoruce -s
============================================================================================================

============================================================================================================
TYPESCRIPT d.ts
------------------------------------------------------------------------------------------------------------
> Edit @tsc.txt
  > make sure all necessary *.ts files are included
> Generate apn.d.ts (apn.d.ts cannot be included in VS Solution, otherwise compile errors)
  > tsc @tsc.txt
============================================================================================================

============================================================================================================
DEPLOY TO NUGET
> UPDATE
  > bundleconfig.json (save)
  > d.ts (run tsc @tsc.txt)
------------------------------------------------------------------------------------------------------------
SETUP NUGET
> nuget.exe should be in the solution folder under .nuget
> Register NuGet API-KEY (get the API key from nuget.com - only once per machine)
------------------------------------------------------------------------------------------------------------
LIST PACKAGE
> .\nuget list AzurePortalStyleNg -AllVersions -Prerelease -Source nuget.org
> .\nuget list AzurePortalStyleNg -AllVersions -Prerelease -Source ardimedia.com
------------------------------------------------------------------------------------------------------------
DEPLOY BY COMMAND
> CD C:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\.nuget
> .\nuget.exe pack ..\AzurePortalStyleNg.Ui.Web\nuspec-packager.nuspec -OutputDirectory ..\AzurePortalStyleNg.Ui.Web\!!Out-Nuget
> TO ARDIMEDIA:
  COPY ..\AzurePortalStyleNg.Ui.Web\!!Out-Nuget\AzurePortalStyleNg.0.1.47-beta.nupkg \\SVRDEV01\Drive-D\_Data\NuGet\Release
> TO NUGET.ORG
 .\nuget.exe push ..\AzurePortalStyleNg.Ui.Web\!!Out-Nuget\AzurePortalStyleNg.0.1.44-beta.nupkg
------------------------------------------------------------------------------------------------------------
DEPLOY VIA WEB SITE
> https://www.nuget.org/packages/AzurePortalStyleNg
  C:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\AzurePortalStyleNg.Ui.Web\!!Out-Nuget
============================================================================================================
