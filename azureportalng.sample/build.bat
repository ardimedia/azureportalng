CLS
ECHO "DELETE BUILD DIRECTORY & NODE_MODULE" & RMDIR /S /Q sample\build & RMDIR /S /Q node_modules\azureportalng
ECHO "COPY azureportalng" & XCOPY ..\azureportalng\node_modules\azureportalng node_modules\azureportalng\ /E/I/Q/R/Y
ECHO "WEBPACK" & CALL webpack
