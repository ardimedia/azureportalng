// Type definitions for ngDialog 0.3.1
// Project: https://github.com/likeastore/ngDialog
// Definitions by: Harry Pfleger <http://github.com/iwhp>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// DOCUMENTATION: https://github.com/likeastore/ngDialog#api

///////////////////////////////////////////////////////////////////////////////
// ngDialog
///////////////////////////////////////////////////////////////////////////////
declare module NgDialog {
    interface INgDialog {
        close(id: string, value: any);
        closeAll(value: any);
        open(options: any): string;
        openConfirm(options: any): string;
    }

    interface INgDialogProvider {
        isOpen(id: string): boolean;
        setDefaults(options: any);
        setForceBodyReload(x: boolean);
    }
}
