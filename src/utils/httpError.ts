import createError from 'http-errors'

/**
 * Create a 400 Bad Request error
 */
export const badRequest = (message = 'Bad Request') => {
    return new createError.BadRequest(message)
}

/**
 * Create a 401 Unauthorized error
 */
export const unauthorized = (message = 'Unauthorized') => {
    return new createError.Unauthorized(message)
}

/**
 * Create a 403 Forbidden error
 */
export const forbidden = (message = 'Forbidden') => {
    return new createError.Forbidden(message)
}

/**
 * Create a 404 Not Found error
 */
export const notFound = (message = 'Not Found') => {
    return new createError.NotFound(message)
}

/**
 * Create a 409 Conflict error
 */
export const conflict = (message = 'Conflict') => {
    return new createError.Conflict(message)
}

/**
 * Create a 422 Unprocessable Entity error
 */
export const unprocessableEntity = (message = 'Unprocessable Entity') => {
    return new createError.UnprocessableEntity(message)
}

/**
 * Create a 500 Internal Server Error
 */
export const internalServerError = (message = 'Internal Server Error') => {
    return new createError.InternalServerError(message)
}
