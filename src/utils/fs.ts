import fs from 'fs-extra'

/**
 * Check if a file or directory exists
 */
export const fileExists = async (filePath: string): Promise<boolean> => {
    return fs.pathExists(filePath)
}

/**
 * Read a file as text
 */
export const readFile = async (filePath: string): Promise<string> => {
    return fs.readFile(filePath, 'utf-8')
}

/**
 * Write data to a file, creating directories if needed
 */
export const writeFile = async (filePath: string, data: string): Promise<void> => {
    await fs.ensureFile(filePath)
    await fs.writeFile(filePath, data, 'utf-8')
}

/**
 * Delete a file if it exists
 */
export const deleteFile = async (filePath: string): Promise<void> => {
    if (await fileExists(filePath)) {
        await fs.remove(filePath)
    }
}

/**
 * Copy a file or directory
 */
export const copyPath = async (src: string, dest: string): Promise<void> => {
    await fs.copy(src, dest)
}

/**
 * Ensure a directory exists
 */
export const ensureDir = async (dirPath: string): Promise<void> => {
    await fs.ensureDir(dirPath)
}
