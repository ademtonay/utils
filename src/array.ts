import { Arrayable, Nullable } from './types'

/**
 * Convert Arrayable<T> to Array<T>
 */
export function toArray<T> (array: Nullable<Arrayable<T>>): Array<T> {
  array = array || []
  if (Array.isArray(array))
    return array
  return [array]
}

/**
 * Convert Arrayable<T> to Array<T>
 *
 *@example flattenArrayable([1, [1, [2]]]) => [1, 1, [2]]
 */
export function flattenArrayable<T> (array: Nullable<Arrayable<T | Array<T>>>): Array<T> {
  return toArray(array).flat(1) as Array<T>
}

/**
 * Use rest arguments to merge arrays
 */
export function mergeArrayable<T> (...args: Nullable<Arrayable<T>>[]): Array<T> {
  return args.flatMap(i => toArray(i))
}

/**
 * Divide an array into two parts by a filter function.
 *
 * @example const [odd, even] = partition([1, 2, 3, 4], i => i % 2 != 0)
 */
export function partition<T> (array: T[], filter: (i: T, idx: number, arr: T[]) => any) {
  const pass: T[] = []
  const fail: T[] = []
  array.forEach((e, idx, arr) => (filter(e, idx, arr) ? pass : fail).push(e))
  return [pass, fail]
}

/**
 * Sort an array of objects by a key
 *
 * @example sortByKey([{a: 1}, {a: 3}, {a: 2}], 'a') => [{a: 1}, {a: 2}, {a: 3}]
 */
export function sortByKey<T> (array: T[], key: keyof T): T[] {
  return array.sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
}
