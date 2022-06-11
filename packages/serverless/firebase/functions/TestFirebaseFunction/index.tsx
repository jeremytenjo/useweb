import React, { useState } from 'react'

import useFirebaseFunction from '../useFirebaseFunction/src'
import Button1 from '../../../../input/Button/styles/1'
import Text from '../../../../dataDisplay/Text/src'
import Box from '../../../../dataDisplay/Box/src'
import Code from '../../../../dataDisplay/Code'
import FadeInOut from '../../../../utils/Animation/FadeInOut'
import ErrorMessage from '../../../../dataDisplay/ErrorMessage'
import JSONInput from '../../../../input/JSONInput'
import Donut from '../../../../feedback/progress/Donut'

export default function TestFirebaseFunction({
  functionName = '',
  defaultData = {},
  styles = {},
}) {
  const [jsonData, setJsonData] = useState(defaultData)
  const cloudFunction = useFirebaseFunction({
    name: functionName,
    fetchOptions: {
      body: JSON.stringify(jsonData),
    },
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
