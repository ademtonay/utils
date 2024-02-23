/**
 * Replace backslash to slash
 *
* @example slash('C:\Users\') => 'C:/Users/'
 */
export function slash (str: string) {
  return str.replace(/\\/g, '/')
}
