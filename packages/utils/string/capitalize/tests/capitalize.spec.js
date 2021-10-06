import capitalize from '.'

test('Letter is capitalized', () => {
  expect(capitalize('string')).toBe('String')
})
