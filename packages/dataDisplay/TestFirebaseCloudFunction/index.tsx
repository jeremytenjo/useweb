import useFirebaseCloudFunction from '../../utils/cloud/functions/firebase/useFirebaseCloudFunction'
import Button1 from '../../input/Button/styles/1'
import Text from '../Text/build/types'
import Box from '../Box/build/types'
import Code from '../Code'
import FadeInOut from '../../utils/Animation/components/FadeInOut'
import ErrorMessage from '../ErrorMessage'
import JSONInput from '../../input/JSONInput'
import Donut from '../../feedback/progress/Donut'

export default function TestFirebaseCloudFunction({
  functionName = '',
  cloudFunctionsLocalPort = 5002,
  defaultData = {},
  styles = {},
}) {
  const [jsonData, setJsonData] = useState(defaultData)
  const cloudFunction = useFirebaseCloudFunction(functionName, {
    data: jsonData,
    cloudFunctionsLocalPort,
  })

  return (
    <Box styles={{ padding: 'm', ...styles }}>
      <Text
        text={`Running function: ${functionName}`}
        styles={{ marginBottom: 'm', textAlign: 'center' }}
      />

      <Box
        styles={{
          gridAutoFlow: ['row', 'row', 'column'],
          gridGap: 'm',
          gridTemplateColumns: ['1fr', '1fr 1fr '],
        }}
      >
        <Box name='payload' styles={{ alignContent: 'start' }}>
          <Text text={`Payload: (Editable)`} styles={{ marginBottom: 'm' }} />

          <Box styles={{ marginBottom: 'm' }}>
            <JSONInput
              id='a_unique_id'
              placeholder={defaultData}
              height='fit-content'
              width='100%'
              onChange={(data) => setJsonData(data.jsObject)}
            />
          </Box>

          <Button1 onClick={() => cloudFunction.exec()} text='Execute' />
        </Box>

        <Box name='Result' styles={{ alignContent: 'start' }}>
          <Text text={`Result:`} styles={{ marginBottom: 'm' }} />

          <div style={{ position: 'relative' }}>
            <FadeInOut
              show={cloudFunction.loading && !cloudFunction.error}
              style={{ position: 'absolute' }}
            >
              <Donut />
            </FadeInOut>

            <FadeInOut
              show={
                cloudFunction.result && !cloudFunction.error && !cloudFunction.loading
              }
            >
              <Code code={cloudFunction.result} stringify />
            </FadeInOut>

            <FadeInOut show={cloudFunction.error}>
              <ErrorMessage error={cloudFunction.error} />
            </FadeInOut>
          </div>
        </Box>
      </Box>
    </Box>
  )
}
