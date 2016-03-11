============================================================================================================
SOURCE
------------------------------------------------------------------------------------------------------------
https://github.com/iwhp/AzurePortalStyleNg
============================================================================================================

============================================================================================================
DEPLOY TO NUGET
> Prepare
  > gulp tsc-release
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
gulp tsc-release
CD D:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\.nuget
.\nuget.exe pack ..\AzurePortalStyleNg.Ui.Web\nuspec-packager.nuspec -OutputDirectory ..\AzurePortalStyleNg.Ui.Web\!NugetOut
COPY ..\AzurePortalStyleNg.Ui.Web\!NugetOut\AzurePortalStyleNg.0.1.74-beta.nupkg \\Svrtfs01.ardimedia.com\d$\!Data\NuGet\Packages

> TO ARDIMEDIA:
> TO NUGET.ORG
 .\nuget.exe push ..\AzurePortalStyleNg.Ui.Web\!NugetOut\AzurePortalStyleNg.0.1.44-beta.nupkg
------------------------------------------------------------------------------------------------------------
DEPLOY VIA WEB SITE
> https://www.nuget.org/packages/AzurePortalStyleNg
  C:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\AzurePortalStyleNg.Ui.Web\!NugetOut
============================================================================================================
