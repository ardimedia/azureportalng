============================================================================================================
DEPLOY TO NUGET
------------------------------------------------------------------------------------------------------------
SETUP NUGET
> nuget.exe should be in the solution folder under .nuget
> Register NuGet API-KEY (get the API key from nuget.com - only once per machine)
------------------------------------------------------------------------------------------------------------
LIST PACKAGE
> find-package AzurePortalStyleNg -AllVersions -IncludePrerelease
> nuget list AzurePortalStyleNg -AllVersions -Prerelease -Source nuget.org
> nuget list AzurePortalStyleNg -AllVersions -Prerelease -Source ardimedia.com
------------------------------------------------------------------------------------------------------------
DEPLOY BY COMMAND TO nuget.com
> nuget.exe pack ..\AzurePortalStyleNg.Ui.Web\nuspec-packager.nuspec -OutputDirectory ..\AzurePortalStyleNg.Ui.Web\!!Out-Nuget
> nuget.exe push ..\AzurePortalStyleNg.Ui.Web\!!Out-Nuget\AzurePortalStyleNg.0.1.41-beta.nupkg
> COPY ..\AzurePortalStyleNg.Ui.Web\!!Out-Nuget\AzurePortalStyleNg.0.1.41-beta.nupkg \\SVRDEV01\Drive-D\_Data\NuGet\Release
------------------------------------------------------------------------------------------------------------
DEPLOY VIA WEB SITE
> https://www.nuget.org/packages/AzurePortalStyleNg
  C:\!Data\Code\Git.Github\iwhp\AzurePortalStyleNg\AzurePortalStyleNg\AzurePortalStyleNg.Ui.Web\!!Out-Nuget
============================================================================================================

============================================================================================================
SOURCE
------------------------------------------------------------------------------------------------------------
https://github.com/iwhp/AzurePortalStyleNg
============================================================================================================
