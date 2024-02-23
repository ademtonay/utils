import { flattenArrayable } from './array'

export function clamp (n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

/**
* Sum all numbers
*
* @example sum([1], [2, 3]) => 6
*/
export function sum (...args: number[] | number[][]) {
  return flattenArrayable(args).reduce((a, b) => a + b, 0)
}
