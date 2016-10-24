namespace AzurePortalNg {

    //#region IException

    /** If a Web Api through an exception, the following interface should be available
    */
    export interface IException {
        ExceptionType: string;  // provided by Web Api
        ClassName: string;      // provided by Web Api
        Message: string;        // provided by Web Api
        Data: Object;           // provided by Web Api: contains additional information
        Type: string;           //
        Messages?: string[];    //
    }

    //#endregion

    export class Exception {
        static convertFromWebApiException(ex: IException): void {
            //#region Process data to Messages

            ex.Messages = [];
            var i = 1;
            while (ex.Data[i + ''] !== undefined) {
                ex.Messages.push(ex.Data[i + '']);
                i++;
            }

            //#endregion

            //#region Process DbEntityValidationException

            if (ex.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
                ex.Type = 'DbEntityValidationException';
            }

            //#endregion

            //#region Process DbUpdateConcurrencyException

            if (ex.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
                ex.Type = 'DbUpdateConcurrencyException';
            }

            //#endregion

            //#region Process ValidationsException

            // ClassName should by ExceptionType
            if (ex.ClassName.indexOf('ValidationsException') > 0) {
                ex.Type = 'ValidationsException';
            }

            //#endregion

            Exception.onConvertFromWebApiException(ex);
        }

        static onConvertFromWebApiException(ex: IException): void {
            Debug.write('[azureportalng-debug] \'Exception.convertFromWebApiException\' not overriden. You could override this.', [this]);
        }
    }
}