import dynamicOperator from './dynamicOperator'

test('Equal === works', () => {
  const result = dynamicOperator({
    post: 1,
    operator: '===',
    value: 1,
  })
  expect(result).toBeTruthy()
})

test('Not Equal !== works', () => {
  const result = dynamicOperator({
    post: 1,
    operator: '!==',
    value: 2,
  })
  expect(result).toBeTruthy()
})

test('Greater than > works', () => {
  const result = dynamicOperator({
    post: 2,
    operator: '>',
    value: 1,
  })
  expect(result).toBeTruthy()
})

test('Less than < works', () => {
  const result = dynamicOperator({
    post: 1,
    operator: '<',
    value: 2,
  })
  expect(result).toBeTruthy()
})

test('greater than or equal to	>= works', () => {
  const result = dynamicOperator({
    post: 1,
    operator: '>=',
    value: 1,
  })
  expect(result).toBeTruthy()
})

test('less than or equal to	>= works', () => {
  const result = dynamicOperator({
    post: 1,
    operator: '<=',
    value: 2,
  })
  expect(result).toBeTruthy()
})
