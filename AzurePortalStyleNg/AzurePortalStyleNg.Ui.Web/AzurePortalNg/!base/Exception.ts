module AzurePortalNg {

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
        static convertFromWebApiException(exception: IException): void {
            //#region Process data to Messages

            exception.Messages = [];
            var i = 1;
            while (exception.Data[i + ''] !== undefined) {
                exception.Messages.push(exception.Data[i + '']);
                i++;
            }

            //#endregion

            //#region Process DbEntityValidationException

            if (exception.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
                exception.Type = 'DbEntityValidationException';
            }

            //#endregion

            //#region Process DbUpdateConcurrencyException

            if (exception.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
                exception.Type = 'DbUpdateConcurrencyException';
            }

            //#endregion

            //#region Process ValidationsException

            // ClassName should by ExceptionType
            if (exception.ClassName === 'Amx.Amms.Application.LgtBc.ValidationsException') {
                exception.Type = 'ValidationsException';
            }

            //#endregion

            Exception.onConvertFromWebApiException(exception);
        }

        static onConvertFromWebApiException(exception: IException): void {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Exception.ConvertFromWebApiException\' not overriden. You could override this.', [this]);
        }
    }
}