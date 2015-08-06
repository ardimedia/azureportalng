============================================================================================================
DEPLOY TO NUGET
------------------------------------------------------------------------------------------------------------
SETUP NUGET
> nuget.exe should be in the solution folder under .nuget
> Register NuGet API-KEY (get the API key from nuget.com - only once per machine)
------------------------------------------------------------------------------------------------------------
DEPLOY BY COMMAND TO nuget.com
> nuget.exe pack ..\AzurePortalStyleNg.Ui.Web\nuspec-packager.nuspec -OutputDirectory ..\AzurePortalStyleNg.Ui.Web\!!Out-Nuget
> nuget.exe push ..\AzurePortalStyleNg.Ui.Web\!!Out-Nuget/AzurePortalStyleNg.0.1.35-beta.nupkg
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
