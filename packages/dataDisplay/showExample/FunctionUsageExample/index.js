import Code from '../../Code'
import Button from '../../../input/Button/styles/1'

/**
 * @example 
 * const usage = `<button>Download</button>`
 * 
 * <FunctionUsageExample
      usage={usage}
      result={<button>Download<button/>}
    />
 */
export default function FunctionUsageExample({ usage, result: Result, onRun }) {
  return (
    <div style={{ padding: 20 }}>
      <p>Usage:</p>
      <br />
      <Code code={usage} />
      {onRun && (
        <>
          <br />
          <br />
          <Button onClick={onRun} text='Run function' size='small' />
        </>
      )}
      {Result && (
        <>
          <br />
          <br />
          <p>Result:</p>
          <br />
          {Result}
        </>
      )}
    </div>
  )
}
