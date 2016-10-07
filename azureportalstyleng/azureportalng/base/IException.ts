export interface IException {
    ExceptionType: string;  // provided by Web Api
    ClassName: string;      // provided by Web Api
    Message: string;        // provided by Web Api
    Data: Object;           // provided by Web Api: contains additional information
    Type: string;           //
    Messages?: string[];    //
}
