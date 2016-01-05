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
> Install tsd
  npm install tsd -g
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
> Generate apn.d.ts (set apn.d.ts 'Build Action' to 'None')
  > cd C:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\AzurePortalStyleNg.Ui.Web
  > tsc @tsc.txt
============================================================================================================

============================================================================================================
DEPLOY TO NUGET
> Prepare
  > compile (update bower)
  > compile tsc
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
CLS
D:
CD D:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\AzurePortalStyleNg.Ui.Web
tsc @tsc.txt
CD D:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\.nuget
.\nuget.exe pack ..\AzurePortalStyleNg.Ui.Web\nuspec-packager.nuspec -OutputDirectory ..\AzurePortalStyleNg.Ui.Web\!NugetOut
COPY ..\AzurePortalStyleNg.Ui.Web\!NugetOut\AzurePortalStyleNg.0.1.71-beta.nupkg \\Svrtfs01.ardimedia.com\d$\!Data\NuGet\Packages

> TO ARDIMEDIA:
> TO NUGET.ORG
 .\nuget.exe push ..\AzurePortalStyleNg.Ui.Web\!NugetOut\AzurePortalStyleNg.0.1.44-beta.nupkg
------------------------------------------------------------------------------------------------------------
DEPLOY VIA WEB SITE
> https://www.nuget.org/packages/AzurePortalStyleNg
  C:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\AzurePortalStyleNg.Ui.Web\!NugetOut
============================================================================================================
