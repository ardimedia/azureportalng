
CLS
ECHO "DELETE NODE_MODULE AND BUILD DIRECTORY" & RMDIR /S /Q sample\build & RMDIR /S /Q node_modules\azureportalng
ECHO "COPY STUFF 1" & XCOPY ..\azureportalstyleng\node_modules\azureportalng node_modules\azureportalng\ /E/I/Q/R/Y
ECHO "WEBPACK" & CALL webpack
