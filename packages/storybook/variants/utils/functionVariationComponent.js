export default ({ func, testValue }) => {
  const subTitileStyles = { color: '#dcdcdc', fontSize: '12px', fontStyle: 'italic' }
  const valueStyles = { color: '#ffffff', fontSize: '12px' }
  const wrapperStyles = { display: 'grid', gridGap: '5px' }

  return func ? (
    <div style={{ display: 'grid', gridGap: '10px' }}>
      <div style={wrapperStyles}>
        <span style={subTitileStyles}>Before: </span>
        <span style={valueStyles}>{testValue}</span>
      </div>

      <div style={wrapperStyles}>
        <span style={subTitileStyles}>Result: </span>
        <span style={valueStyles}>{func(testValue)}</span>
      </div>
    </div>
  ) : null
}
