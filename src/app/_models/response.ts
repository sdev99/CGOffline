export class Response {
    Version: string;
    StatusCode: number;
    Message: string;
    Result: any;
    ResponseException: {
        IsError: boolean,
        ExceptionMessage: string,
        Details: any,
        ReferenceErrorCode: number,
        ReferenceDocumentLink: string,
        ValidationErrors: [
            {
                Field: string,
                Message: string,
            }
        ]
    };
}
