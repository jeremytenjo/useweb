// External Usage:

// import { array } from '@tenjojeremy/wapp'
// const result = array('filter', { params})

// Available params: post, array, condition, value

import arrayFunc from './functions/array.func'

// Features
test('Check whether at least one element in the array passes the test implemented by the provided function - Single Values', () => {
  const arrayOfSingleValues = ['1', '2', '3']
  const result = arrayFunc('some', {
    array: arrayOfSingleValues,
    condition: '===',
    value: '3',
  })
  expect(result).toBeTruthy()
})

test('Check whether at least one element in the array passes the test implemented by the provided function - Object', () => {
  const arrayOfObjects = [
    { id: 1, name: 'jeremy' },
    { id: 2, name: 'hayle' },
    { id: 3, name: 'jen' },
  ]
  const result = arrayFunc('some', {
    array: arrayOfObjects,
    post: 'id',
    condition: '===',
    value: 2,
  })
  expect(result).toBeTruthy()
})

test('Return the index of the first element in the array that satisfies - Single Value', () => {
  const arrayOfSingleValues = ['1', '2', '3']
  const result = arrayFunc('findIndex', {
    array: arrayOfSingleValues,
    condition: '===',
    value: '3',
  })
  expect(result).toBe(2)
})

test('Return the index of the first element in the array that satisfies - Object', () => {
  const arrayOfObjects = [
    { id: 1, name: 'jeremy' },
    { id: 2, name: 'hayle' },
    { id: 3, name: 'jen' },
  ]
  const result = arrayFunc('findIndex', {
    array: arrayOfObjects,
    post: 'id',
    condition: '===',
    value: 3,
  })
  expect(result).toBe(2)
})

test('Filter array of single values', () => {
  const arrayOfSingleValues = ['1', '2', '3']
  const result = arrayFunc('filter', {
    array: arrayOfSingleValues,
    condition: '===',
    value: '3',
  })
  expect(result).toContain('3')
})

test('Filter array of objects', () => {
  const arrayOfObjects = [
    { id: 1, name: 'jeremy' },
    { id: 2, name: 'hayle' },
    { id: 3, name: 'jen' },
  ]
  const result = arrayFunc('filter', {
    array: arrayOfObjects,
    post: 'id',
    condition: '===',
    value: 2,
  })
  expect(result).toContainEqual(expect.objectContaining({ id: 2, name: 'hayle' }))
})
