import { flattenArrayable, sortByKey } from './array'

it('flattenArrayable', () => {
  expect(flattenArrayable()).toEqual([])
  expect(flattenArrayable([])).toEqual([])
  expect(flattenArrayable(1)).toEqual([1])
  expect(flattenArrayable([1, '2', 3])).toEqual([1, '2', 3])
  expect(flattenArrayable([1, [1, 2]])).toEqual([1, 1, 2])
  expect(flattenArrayable([1, [1, [2]]])).toEqual([1, 1, [2]])
})

it('sortByKey', () => {
  const sortableArray = [
    { name: 'Jhon', age: 30 }, { name: 'Mike', age: 20 }, { name: 'Scarlet', age: 35 },
  ]

  expect(sortByKey(sortableArray, 'age')).toEqual([
    { name: 'Mike', age: 20 }, { name: 'Jhon', age: 30 }, { name: 'Scarlet', age: 35 },
  ])

  expect(sortByKey(sortableArray, 'name')).toEqual([
    { name: 'Jhon', age: 30 }, { name: 'Mike', age: 20 }, { name: 'Scarlet', age: 35 },
  ])
})
