============================================================================================================
SOURCE
------------------------------------------------------------------------------------------------------------
https://github.com/iwhp/AzurePortalStyleNg
============================================================================================================

============================================================================================================
COMPILE PROJECXT
> gulp clean & gulp
------------------------------------------------------------------------------------------------------------
SETUP NUGET
> nuget.exe should be in the solution folder under .nuget
> Register NuGet API-KEY (get the API key from nuget.com - only once per machine)
------------------------------------------------------------------------------------------------------------
** LIST PACKAGE
CLS
D:
CD D:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\AzurePortalStyleNg.Ui.Web
..\.nuget\nuget list AzurePortalStyleNg -AllVersions -Prerelease -Source nuget.org
..\.nuget\nuget list AzurePortalStyleNg -AllVersions -Prerelease -Source ardimedia.com
------------------------------------------------------------------------------------------------------------
** DEPLOY TO ARDIMEDIA
CLS
D:
CD D:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\AzurePortalStyleNg.Ui.Web
gulp clean & gulp
CD D:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\.nuget
.\nuget.exe pack ..\AzurePortalStyleNg.Ui.Web\nuspec-packager.nuspec -OutputDirectory ..\AzurePortalStyleNg.Ui.Web\!NugetOut
COPY ..\AzurePortalStyleNg.Ui.Web\!NugetOut\AzurePortalStyleNg.0.2.1-beta.nupkg \\SVRTFS01.ardimedia.com\d$\!Data\NuGet\Packages
------------------------------------------------------------------------------------------------------------
** DEPLOY TO NUGET.ORG
 .\nuget.exe push ..\AzurePortalStyleNg.Ui.Web\!NugetOut\AzurePortalStyleNg.0.2.1-beta.nupkg
------------------------------------------------------------------------------------------------------------
DEPLOY VIA NUGET.ORG WEB SITE
> https://www.nuget.org/packages/AzurePortalStyleNg
  D:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\AzurePortalStyleNg.Ui.Web\!NugetOut
============================================================================================================
