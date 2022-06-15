// // External Usage:

// // import { array } from '@tenjojeremy/wapp'
// // const result = array('findIndex', { params})

// // Available params: post, array, condition, value

// import arrayFunc from './functions/array.func'

// // Features
// test('Return the index of the first element in the array that satisfies - Single Value', () => {
//   const arrayOfSingleValues = ['1', '2', '3']
//   const result = arrayFunc('findIndex', {
//     array: arrayOfSingleValues,
//     condition: '===',
//     value: '3',
//   })
//   expect(result).toBe(2)
// })

// test('Return the index of the first element in the array that satisfies - Object', () => {
//   const arrayOfObjects = [
//     { id: 1, name: 'jeremy' },
//     { id: 2, name: 'hayle' },
//     { id: 3, name: 'jen' },
//   ]
//   const result = arrayFunc('findIndex', {
//     array: arrayOfObjects,
//     post: 'id',
//     condition: '===',
//     value: 3,
//   })
//   expect(result).toBe(2)
// })
