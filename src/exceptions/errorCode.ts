export interface ErrorCode {
    code: string,
    message: string,
}

export const ErrorCodes = {
    NOT_FOUND: { 
        code: "NOT_FOUND_ERROR",
        message: "NOT FOUND"
    },
    INTERNAL_SERVER_ERROR: {
        code: "INTERNAL_SERVER_ERROR",
        message: "INTERNAL SERVER ERROR"
    }
}