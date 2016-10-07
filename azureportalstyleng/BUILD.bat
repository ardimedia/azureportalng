
CLS
ECHO "DELETE DIST AND BUILD DIRECTORIES" & RMDIR /S /Q dist & RMDIR /S /Q node_modules\azureportalng

ECHO "COPY HTML"            & XCOPY azureportalng\directives\*.html  dist\azureportalng\directives\ /E/I/Q/R/Y
ECHO "COPY CSS"             & XCOPY azureportalng\css\*.css          dist\azureportalng\css\        /E/I/Q/R/Y
ECHO "COPY IMAGES"          & XCOPY azureportalng\images             dist\azureportalng\images\     /E/I/Q/R/Y

ECHO "GENERATE D.TS"        & CALL  dts-generator --name azureportalng --project ./ --out ./dist/azureportalng/index.d.ts
ECHO "COPY .D.TS"           & XCOPY dist\azureportalng\index.d.ts    node_modules\azureportalng\      /I/Q/R/Y

ECHO "GENERATE commonjs"    & CALL  TSC
ECHO "COPY TO node_modules" & XCOPY dist\azureportalng               node_modules\azureportalng\    /E/I/Q/R/Y
