## LIST PACKAGE
C:\APP\nuget\nuget list azureportalng -allversion -prerelease -Source https://nuget.ardimedia.com/nuget

## DEPLOY TO ARDIMEDIA

Change Version in:
* package.nuspec
* command below

DOS commands:

    CLS
    GULP clean-script
    GULP clean-dist
    GULP build-apn

    (by hand) COMPILE the solution

    C:\APP\nuget\nuget.exe pack package.nuspec -OutputDirectory dist
    COPY dist\azureportalng.0.2.1-beta.nupkg \\SVRTFS01.ardimedia.com\d$\!Data\NuGet\Packages
