export interface ErrorCode {
    code: string,
    message: string,
}

export const ErrorCodes = {
    // Not Found -> 404
    NOT_FOUND: { 
        code: "NOT_FOUND_ERROR",
        message: "NOT FOUND"
    },
    // Internal Server Error -> 500
    INTERNAL_SERVER_ERROR: {
        code: "INTERNAL_SERVER_ERROR",
        message: "INTERNAL SERVER ERROR"
    },
    // Bad Request -> 400
    BAD_REQUEST: {
        code: "BAD_REQUEST",
        message: "BAD_REQUEST"
    },   
    // Unauthorized -> 401
    UNAUTHORIZED: {
        code: "UNAUTHORIZED",
        message: "UNAUTHORIZED"
    },
    // Forbidden (o cliente não tem direito de acessar a resposta) -> 403
    FORBIDDEN: {
        code: "FORBIDDEN",
        message: "FORBIDDEN"
    },
    // Conflict -> 409
    CONFLICT: {
        code: "CONFLICT",
        message: "CONFLICT"
    },
    // // Ok (requisição bem sucedida) -> 200
    // OK: {
    //     code: "OK",
    //     message: "OK"
    // },
    // // Created -> 201
    // CREATED: {
    //     code: "CREATED",
    //     message: "CREATED"
    // },
    // // Accepted -> 202
    // ACCEPTED: {
    //     code: "ACCEPTED",
    //     message: "ACCEPTED"
    // }
}