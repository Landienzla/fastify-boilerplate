import { v4 as uuidv4, validate as uuidValidate } from 'uuid'

/**
 * Generate a random UUID
 */
export const generateUUID = (): string => uuidv4()

/**
 * Validate a UUID
 */
export const isUUID = (uuid: string): boolean => uuidValidate(uuid)

/**
 * Generate a UUID with a prefix
 */
export const generateUUIDWithPrefix = (prefix: string): string =>
  `${prefix}-${generateUUID()}`

/**
 * Generate a UUID with a timestamp prefix
 */
export const generateUUIDWithTimestamp = (): string =>
  `${Date.now()}-${generateUUID()}`

/**
 * Validate a UUID with a specific prefix
 */
export const validateUUIDWithPrefix = (
  uuid: string,
  prefix: string
): boolean => {
  if (!uuid.startsWith(`${prefix}-`)) return false
  const uuidWithoutPrefix = uuid.slice(prefix.length + 1)
  return isUUID(uuidWithoutPrefix)
}
